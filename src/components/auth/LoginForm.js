import React, { useState } from 'react';
import { StyleSheet, TextInput, Keyboard, View, Text, Button } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { user, userDetails} from '../../utils/userDB';
import useAuth from '../../hooks/useAuth';

export default function LoginForm() {

    const [error, setError] = useState('');

    const { login } = useAuth();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (formValue) => {

            setError('');
            const { username, password } = formValue;

            if(username !== user.username || password !== user.password){
                setError('username or password is no correct');
            } else {
                login(userDetails)
            }
        }
    });

    return (
        <View>
            <Text style={styles.title} >Login</Text>
            <TextInput 
                placeholder='Username'
                style={styles.input}
                value={formik.values.username}
                onChangeText={(text) => formik.setFieldValue('username', text) }
            />
            <TextInput 
                placeholder='Password'
                style={styles.input}
                secureTextEntry= {true}
                value={formik.values.password}
                onChangeText={(text) => formik.setFieldValue('password', text)}
            />
            <Button  
                title='Log In'
                onPress={formik.handleSubmit}
            />

            <Text style={styles.errors} > {formik.errors.username} </Text>
            <Text style={styles.errors} > {formik.errors.password} </Text>
            <Text style={styles.errors} > {error} </Text>
        </View>
    )
}

 function initialValues() {
    return {
        username: "",
        password: ""
    }
 };

 function validationSchema() {
    return{
        username: Yup.string().required("The username is required"),
        password: Yup.string().required("The password is required"),
    }
 }

    const styles = StyleSheet.create({
        title: {
            textAlign: "center",
            fontSize: 28,
            fontWeight: "bold",
            marginTop: 50,
            marginBottom: 15,
        },
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
        },
        errors: {
            textAlign: "center",
            color: "#f00",
            marginTop: 10,
        },
    })