import ModalUnstyled from '@mui/base/ModalUnstyled';
import styled from 'styled-components';
import clsx from 'clsx';
import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const BackdropUnstyled = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});


const Modal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  top: 10em;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 6em;
  left: 0;
  background: radial-gradient(110.94% 50% at 50% 50%, #F4F4F4 41.15%, rgba(244, 244, 244, 0.85) 100%);
  backdrop-filter: blur(2px);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px;
  gap: 48px;
  background: #FFFFFF;
  max-width: 420px;
  min-width: 200px;
  margin: 5em;
  /* M3/Elevation Light/5 */

  box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 16px;

  outline: none;
`;

const ModalNoAuth = () => {
    return (
        <Modal open={true} slots={{ backdrop: Backdrop }}>
            <Content>
              <Typography variant="h4">INICIA SESION</Typography>
              <Typography variant="subtitle1">Necesitamos tus datos para que puedas usar algunas herramientas.</Typography>
              <Button variant="contained" color="primary">
                Ingresar
              </Button>
            </Content>
        </Modal>
    )
}

export default ModalNoAuth;