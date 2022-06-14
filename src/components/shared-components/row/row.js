import React from 'react';

import PropTypes from 'prop-types';

const Row = ({ left, right }) => {

  return (
    <section className='row mb2'>
      <div className='col-lg-3'>
        {left}
      </div>
      <div className='col-lg-9'>
        {right}
      </div>
    </section>
  );
};

//проверка типов;
// все, что может быть отрендерено:
// числа, строки, элементы или массивы
// (или фрагменты), содержащие эти типы
Row.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node
};

export default Row;
