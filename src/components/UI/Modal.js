import React from 'react'
import ReactDOM from 'react-dom' // 포털쓰려면 임포트
import styles from './Modal.module.css'

function Backdrop(props){
    return (
        <div className={styles.backdrop} onClick={props.onClose}></div>
    )
}

function ModalOverlay(props){
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}

const portal = document.getElementById('overlays')

function Modal(props) {
  return (
    <>
   {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portal)}
   {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portal)}
    </>
  )
}

export default Modal