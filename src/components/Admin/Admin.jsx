import React, { useState } from 'react';
import styles from './Admin.module.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export default function Admin() {
  const [formData, setFormData] = useState([{ type: 'p', content: '' }]);

  const onChangeData = (e, pos) => {
    let oldData = [...formData];
    const newData = e.target.value;
    oldData[pos].content = newData;
    setFormData(oldData);
  };

  const addLine = (pos) => {
    let oldData = [...formData];
    oldData.splice(pos + 1, 0, { type: 'p', content: '' });
    setFormData(oldData);
  };

  const removeLine = (pos) => {
    if (formData.length === 1) return;
    let oldData = [...formData];
    oldData.splice(pos, 1);
    setFormData(oldData);
  };

  const changeType = (pos, type) => {
    let oldData = [...formData];
    oldData[pos].type = type;
    setFormData(oldData);
  };

  return (
    <div className={styles.adminPage}>
      <div className={styles.left}>admin</div>
      <div className={styles.right}>
        <div className={styles.inputBox}>
          <h2>טופס תרגיל</h2>
          {formData &&
            formData.map((data, i) => {
              const { type, content } = data;
              return (
                <div key={i} className={styles.inputRow}>
                  <button
                    className={type === 'p' ? styles.pressBtn : undefined}
                    onClick={() => changeType(i, 'p')}
                  >
                    פיסקה
                  </button>
                  <button
                    className={type === 'h' ? styles.pressBtn : undefined}
                    onClick={() => changeType(i, 'h')}
                  >
                    כותרת
                  </button>
                  <button
                    className={type === 'u' ? styles.pressBtn : undefined}
                    onClick={() => changeType(i, 'u')}
                  >
                    קו תחתון
                  </button>
                  <input
                    onChange={(e) => onChangeData(e, i)}
                    type="text"
                    value={content}
                    className={styles[type]}
                  />
                  <AiOutlinePlus onClick={() => addLine(i)} />
                  <AiOutlineMinus onClick={() => removeLine(i)} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
