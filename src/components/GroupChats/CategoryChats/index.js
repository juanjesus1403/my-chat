import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ModelChat from '../../../models/chat';
import ModelUser from '../../../models/user';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
    },
}));

const CategoryChat = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCreate = () => {
        if (category !== '') {
            const uuidChat = ModelChat.addChat('grupal', category);
            ModelChat.addUserToChat(uuidChat, ModelUser.getUser().id);
            window.location.href = "/chat/" + uuidChat;
        }
        setOpen(false);
    };

    return (
        <span>
            <IconButton onClick={handleClickOpen}>
                <AddIcon />
            </IconButton>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogContent>
                    <form className={classes.container}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-dialog-select-label">Selecciona una categoria</InputLabel>
                            <Select
                                labelId="demo-dialog-select-label"
                                id="demo-dialog-select"
                                value={category}
                                onChange={handleChange}
                                input={<Input />}
                            >
                                <MenuItem value={'Juegos'}>Front-End</MenuItem>
                                <MenuItem value={'Tecnología'}>Back-End</MenuItem>
                                <MenuItem value={'Entretenimiento'}>UX/UI</MenuItem>
                                <MenuItem value={'Entretenimiento'}>Soporte Tecnico</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} >
                        Cancel
                    </Button>
                    <Button onClick={handleCreate}>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </span>
    );
}

export default CategoryChat; 