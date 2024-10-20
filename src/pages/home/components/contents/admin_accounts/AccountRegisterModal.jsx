import React from 'react'
import styled from 'styled-components'
import { ROLES } from '../../../../../settings/constants';
import { Palette } from '../../../../../shared/styled/theme';

function AccountRegisterModal({onSubmit, onCancel}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const accountData = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
    };
    const password = formData.get('password');
    onSubmit(accountData, password);
  };

  return (
    <Container>
      <ModalHeader>
        <ModalTitle>Register Account</ModalTitle>
      </ModalHeader>
      <ModalBody onSubmit={handleSubmit}>
        <Field>
          <Label>First Name</Label>
          <Input type="text" name="firstName" placeholder="First Name" />
        </Field>
        <Field>
          <Label>Last Name</Label>
          <Input type="text" name="lastName" placeholder="Last Name" />
        </Field>
        <Field>
          <Label>Email</Label>
          <Input type="text" name="email" placeholder="Email" />
        </Field>
        <Field>
          <Label>Password</Label>
          <Input type="password" name="password" placeholder="Password" />
        </Field>
        <Actions>
          <Button type="submit">Register</Button>
          <Button type="button" onClick={onCancel}>Cancel</Button>
        </Actions>
      </ModalBody>
    </Container>
  )
}

const Container = styled.div`
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${Palette.Background200};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ModalHeader = styled.div`
  padding: 1em;
  background-color: ${Palette.Primary};
`;

const ModalTitle = styled.h2`
  margin: 0;
`;

const ModalBody = styled.form`
  padding: 1em;
`;

const Field = styled.div`
  margin-bottom: 1em;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5em;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5em;
  border: 1px solid  ${Palette.Background300};
  border-radius: 5px;

  &[type="checkbox"]:checked {
    accent-color: ${Palette.Accent};
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1em;
`;

const Button = styled.button`
  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:first-of-type {
    background-color: ${Palette.Primary};
    color: ${Palette.Text};
  }

  &:last-of-type {
    background-color: ${Palette.Background900};
    color: ${Palette.Text100};
  }

  &:hover:first-of-type {
    background-color: ${Palette.Accent};
  }

  &:hover:last-of-type {
    background-color: ${Palette.Background800};
  }
`;

export default AccountRegisterModal

