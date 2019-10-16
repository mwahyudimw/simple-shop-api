const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Handling get request'
  });
});

router.post('/', (req, res) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };

  res.status(200).json({
    message: 'Handling post request',
    order: order
  });
});

router.get('/:orderId', (req, res) => {
  const id = req.params.orderId;
  res.status(200).json({
    message: 'Handling get product'
  });
});

router.patch('/:orderId', (req, res) => {
  const id = req.params.orderId;
  res.status(200).json({
    message: 'Handling updated product'
  });
});

router.delete('/:orderId', (req, res) => {
  const id = req.params.orderId;
  res.status(200).json({
    message: 'Handling deleted product'
  });
});

module.exports = router;