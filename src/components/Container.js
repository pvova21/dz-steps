import { useState } from 'react';
import Form from './Form';
import List from './List';

export default function Container() {

  const [form, setForm] = useState({
    date: '2023-01-24',
    path: '4.4',
  });

  const [list, setList] = useState([]);

  const onChange = (e) => {
    e.target.value = e.target.value.replace(',', '.');
    setForm((prev) => ({...prev, [e.target.name]: e.target.value}));
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (!form.date || !form.path) return;

    if (/[^0-9.]/.test(form.path)) {
      setForm((prev) => ({...prev, path: ''}));
      return;
    }

    setList((prev) => {
      let copy = [...prev.map((step) => ({...step}))];

      if (!prev.find((item) => item.date === form.date)) {
        copy.push(form);
      } else {
        const itemToChange = copy.find((item) => item.date === form.date);

        itemToChange.path = '' + (+itemToChange.path + +form.path);
      }

      return copy.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    });

    setForm((prev) => ({...prev, date: '', path: ''}));
  }

  const onDelstep = (item) => {
    setList((prev) => [...prev].filter((step) => step !== item));
  }

  const onEditstep = (item) => {
    setForm((prev) => ({...prev, date: item.date, path: item.path}));
  }

  return (
    <div className="step-box">
      <Form form={form}
        onFormChange={onChange}
        onFormSubmit={onSubmit}/>

      <List steps={list} 
        onDelClick={onDelstep}
        onEditClick={onEditstep}/>
    </div>
  );
}
