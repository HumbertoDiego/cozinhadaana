import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

import GradientButton from '../GradientButton';

import { CART_MODAL_TITLE, SUCESS_SIGNUP_MESSAGE, ERROR_SIGNUP_MESSAGE } from '../../constants/strings.constants'
import Toast, { ToastInitialState } from '../Toast'

import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../reducers/slices/user.slice';
import { iUser } from '../../db'

import axios from 'axios';

/* function sendMessage(data) {
    var config = {
      method: 'post',
      url: `https://graph.facebook.com/${process.env.VERSION}/${process.env.PHONE_NUMBER_ID}/messages`,
      headers: {
        'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      data: data
    };
  
    return axios(config)
  } */  

interface ModalProps {
    open: boolean;
    toggle: VoidFunction;
}

const cartInitialState: iUser = {
    name: 'Menew Admin',
    email: 'menew@admin.com',
    cpf: '987.654.321-00',
    password: '123'
}

export default function ({ open, toggle }: ModalProps) {
    const [toastConfig, setToastConfig] = useState(ToastInitialState)
    const [openToast, setOpenToast] = useState(false)

    const { error, success } = useSelector((state: any) => state.user)
    const dispatch = useDispatch()

    const handleCloseToast = () => setOpenToast(false)
    const handleOpenToast = () => setOpenToast(true)

    const [carData, setCartData] = useState(cartInitialState)

    //const handleSignUp = () => dispatch(registerUser(carData))

    var waurl = "https://wa.me/5592981000957?text=";
    var txttempalte = `Pedido nº 4294

    Modo de entrega: Delivery
    Endereço: _endereco_de_entrega
    Preço de entrega: R$ 6,00
    
    Itens:
    
    ➡ 1x Coca Cola 2l
    ➡ 1x Pizza Grande (Serve 8 Fatias)
            Escolha a Quantidade de Sabores
                1x 2 Sabores
            2 Sabores -> Sabores
                1x Calabresa
                1x Portuguesa
    
    OBS: Quero por favor a pizza tradicional sem o queijo por cima, apenas por baixo. 
    
    Forma de Pagamento: Cartão (Visa CREDITO)
    
    Total: R$ _preco_da_conpra_
        (Tempo estimado de entrega(delivery): entre 61~97 minutos.)`;


    const handleUserData = ({ target }: any) => {
        const { name, value } = target
        setCartData((prev) => ({ ...prev, [name]: value }))
    }

    useEffect(() => {
        if (error) {
            setToastConfig((prev) => ({ ...prev, message: ERROR_SIGNUP_MESSAGE, type: 'error' }))
            return handleOpenToast()
        }

        if (success) {
            toggle()
            handleOpenToast()
            return setToastConfig((prev) => ({ ...prev, message: SUCESS_SIGNUP_MESSAGE, type: 'success' }))
        }

    }, [error, success])

    return (
        <>
            <Toast open={openToast} handleClose={handleCloseToast} message={toastConfig.message} type={toastConfig.type} />

            <Dialog
                open={open}
                onClose={toggle}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ mx: 1 }}>
                    {CART_MODAL_TITLE}
                </DialogTitle>
                <Box
                    noValidate
                    component="form"
                    autoComplete="off"
                    sx={{ '& > :not(style)': { my: 1 }, width: '90%', margin: '0 auto' }}
                >
                    <TextField
                        name="name"
                        label="Seu nome"
                        variant="filled"
                        required
                        fullWidth
                        onChange={handleUserData}
                    />
                    <TextField
                        name="telefone"
                        label="Seu telefone"
                        variant="filled"
                        required
                        fullWidth
                        onChange={handleUserData}
                    />
                    <TextField
                        name="endereco"
                        label="Seu endereço"
                        variant="filled"
                        required
                        onChange={handleUserData}
                        fullWidth
                    />
                </Box>
                <DialogActions sx={{ mx: 2.5 }}>
                    <Button color="secondary" onClick={toggle}>Cancelar</Button>
                    <GradientButton 
                    onClick={() => {
                        var murl = waurl+txttempalte;
                        window.open(murl,'_blank').focus()
                      }}
                    autoFocus>
                        Enviar
                    </GradientButton>
                </DialogActions>
            </Dialog>
        </>
    );
}