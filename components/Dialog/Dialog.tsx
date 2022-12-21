import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import styles from './Dialog.module.scss';

const Dialog2 = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className={styles.Buttongreen} >
        Edit profile
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className={styles.DialogOverlay} />
      <Dialog.Content className={styles.DialogContent}>
        <Dialog.Title className={styles.DialogTitle}>Edit profile</Dialog.Title>
        <Dialog.Description className={styles.DialogDescription}>
          Make changes to your profile here. Click save when you are done.
        </Dialog.Description>
        <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor="name">
            Name
          </label>
          <input className={styles.Input} id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor="username">
            Username
          </label>
          <input className={styles.Input} id="username" defaultValue="@peduarte" />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <button className={styles.Buttongreen}>Save changes</button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className={styles.IconButton} aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Dialog2;