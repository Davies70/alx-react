import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const rowColor = { backgroundColor: '#f5f5f5ab' };
  const headerColor = { backgroundColor: '#deb5b545' };
  const rowChecked = { backgroundColor: '#e6e4e4' };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <tr style={isHeader ? headerColor : isChecked ? rowChecked : rowColor}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2} className={css(rowsStyles.thcenter)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(rowsStyles.th)}>{textFirstCell}</th>
            <th className={css(rowsStyles.th)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(rowsStyles.td)}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckbox}
            />
            {textFirstCell}
          </td>
          <td className={css(rowsStyles.td)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

const rowsStyles = StyleSheet.create({
  thcenter: {
    borderBottom: '1px solid gray',
    margin: 0,
    padding: 0,
    textAlign: 'center',
  },
  th: {
    borderBottom: '1px solid gray',
    margin: 0,
    padding: 0,
    textAlign: 'left',
  },
  td: {
    paddingLeft: 3,
  },
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
