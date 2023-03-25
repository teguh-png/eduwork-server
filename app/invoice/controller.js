const { subject } = require('@casl/ability');
const { policyFor } = require('../../utils');
const Invoice = require('./model');

const show = async (req, res, next) => {
  try {
    let policy = policyFor(req.user);
    let { order_id } = req.params;
    let invoice = await Invoice.findOne({ order: order_id }).populate('order').populate('user');

    let subjectInvoice = subject('Invoice', { ...invoice, user_id: invoice.user._id });
    if (!policy.can('read', subjectInvoice)) {
      return res.json({
        error: 1,
        message: 'Anda tidak memiliki akses untuk melihat invoice ini.',
      });
    }

    return res.json({
      userName: invoice.user.full_name,
      email: invoice.user.email,
      orderNumber: invoice.order.order_number,
      orderItem: invoice.order.order_items,
      deliveryFee: invoice.order.deliveryFee,
      total: invoice.total,
      address: invoice.order.delivery_address,
    });
  } catch (err) {
    if (err && err.name === 'ValidationError') {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }
    next(err);
  }
};

module.exports = {
  show,
};
