import React, { useState } from 'react';

import ShoppingCartToast from '../shopping-cart-toast';

import './shopping-cart-table.css';

const ShoppingCartTable = ({ items, total,
  onIncrease, onDecrease, onDelete }) => {

  const [showToast, setShowToast] = useState(false);

  const showShoppingCartToast = () => setShowToast(true);
  const closeShoppingCartToast = () => setShowToast(false);

  const onIncreaseItems = (id) => {
    onIncrease(id);
    showShoppingCartToast();
  }

  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;

    return (
      <tr className='shopping-cart-table-row' key={id}>
        <td className='col-1 shopping-cart-table-list-number'>{idx + 1}</td>
        <td className='col-6 shopping-cart-table-title'>{title}</td>
        <td className='col-1 shopping-cart-table-count'>{count}</td>
        <td className='col-1 shopping-cart-table-total'>{total}$</td>
        <td className='col-3 shopping-cart-table-action'>
          <button
            onClick={() => onDecrease(id)}
            className='btn btn-outline-warning btn-sm float-right shopping-cart-btn shopping-cart-btn__btn-decrease'>
            <i className='bi bi-dash-circle-fill shopping-cart-btn-icon'></i>

          </button>
          <button
            onClick={() => onIncreaseItems(id)}
            className='btn btn-outline-success btn-sm float-right shopping-cart-btn shopping-cart-btn__btn-increase'>
            <i className='bi bi-plus-circle-fill shopping-cart-btn-icon'></i>
          </button>
          <button
            onClick={() => onDelete(id)}
            className='btn btn-outline-danger btn-sm float-right shopping-cart-btn shopping-cart-btn__btn-delete'>
            <i className='bi bi-trash3-fill shopping-cart-btn-icon '></i>
          </button>
        </td>
      </tr>
    );
  };

  return (
    <>
      <div className='shopping-cart-table-wrapper'>
        <table className='shopping-cart-table'>
          <thead>
            <tr className='shopping-cart-table-row'>
              <th className='shopping-cart-table-header'>#</th>
              <th className='shopping-cart-table-header'>Item</th>
              <th className='shopping-cart-table-header'>Count</th>
              <th className='shopping-cart-table-header'>Total</th>
              <th className='shopping-cart-table-header'>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              items.map(renderRow)
            }
          </tbody>
        </table>

        <div className='shopping-cart-table-total-price'>
          Total: {total}$
        </div>
      </div>

      <ShoppingCartToast
        show={showToast}
        closeToast={closeShoppingCartToast} />
    </>
  );
};

export default ShoppingCartTable;