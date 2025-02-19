import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor';
import {useDispatch, useSelector} from "react-redux";
import 'easymde/dist/easymde.min.css';
import styles from './AddPost.module.scss';
import { selectIsAuth } from '../../redux/slices/auth';
import {Navigate} from 'react-router-dom'

export const AddPost = () => {
  const imageUrl = '';
  const [value, setValue] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [tags, setTags] = React.useState('');
  const fileRef = React.useRef(null)

  const isAuth = useSelector(selectIsAuth)

  const handleChangeFile = async (e) => {
    pass
  };

  const onClickRemoveImage = () => {};

  const onChange = React.useCallback((value) => {
    setValue(value);
  }, []);

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Введите текст...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  );

  if( !window.localStorage.getItem('token') && !isAuth){
    // console.log('you are not')
    return <Navigate to="/"/>
  }

  return (
    <Paper style={{ padding: 30 }}>
      <Button onClick={()=>{fileRef.current.click()}}variant="outlined" size="large">
        Загрузить превью
      </Button>
      <input ref={fileRef}type="file" onChange={handleChangeFile} hidden />
      {imageUrl && (
        <Button variant="contained" color="error" onClick={onClickRemoveImage}>
          Удалить
        </Button>
      )}
      {imageUrl && (
        <img className={styles.image} src={`http://localhost:4444${imageUrl}`} alt="Uploaded" />
      )}
      <br />
      <br />
      <TextField
        classes={{ root: styles.title }}
        variant="standard"
        placeholder="Заголовок статьи..."
        value={title}
        onChange={e => setTitle(e.target.value)}
        fullWidth
      />
      <TextField
      value={tags}
      onChange={e => setTags(e.target.value)}
      classes={{ root: styles.tags }} 
      variant="standard" 
      placeholder="Тэги" 
      fullWidth 
      />
      <SimpleMDE className={styles.editor} value={value} onChange={onChange} options={options} />
      <div className={styles.buttons}>
        <Button size="large" variant="contained">
          Опубликовать
        </Button>
        <a href="/">
          <Button size="large">Отмена</Button>
        </a>
      </div>
    </Paper>
  );
};
