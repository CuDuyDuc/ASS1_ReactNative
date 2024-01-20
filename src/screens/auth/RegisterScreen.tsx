import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import COLORS from '../../assets/Colors';
import SCREENS from '..';
import IMAGES from '../../assets/Images';
import { StackNavigationProp } from '@react-navigation/stack';
import { TextInput as PaperTextInput } from 'react-native-paper';
import KeyboardAvoidingViewWrapper from '../../component/KeyboardAvoidingWrapper';

interface IntroScreenProps {
    navigation: StackNavigationProp<any>;
}

const RegisterScreen: React.FC<IntroScreenProps> = (props) => {
    const { navigation } = props;
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const isEmpty = (text: string) => {
        return text.trim() === '';
    };

    const validatePhone = (phone: string) => {
        const phoneRegex = /^\d{10}$/; // Định dạng số điện thoại: 10 chữ số
        return phoneRegex.test(phone);
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Định dạng email
        return emailRegex.test(email);
    };

    const handleUsernameChange = (text: string) => {
        setUserName(text);
        if (isEmpty(text)) {
            setUsernameError('Vui lòng nhập tên người dùng');
        } else {
            setUsernameError('');
        }
    };

    const handlePasswordChange = (text: string) => {
        setPassword(text);
        if (isEmpty(text)) {
            setPasswordError('Vui lòng nhập mật khẩu');
        } else {
            setPasswordError('');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleEmailChange = (text: string) => {
        setEmail(text);
        if (isEmpty(text)) {
            setEmailError('Vui lòng nhập email');
        } else if (!validateEmail(text)) {
            setEmailError('Email không hợp lệ');
        } else {
            setEmailError('');
        }
    };

    const handlePhoneChange = (text: string) => {
        setPhone(text);
        if (isEmpty(text)) {
            setPhoneError('Vui lòng nhập số điện thoại');
        } else if (!validatePhone(text)) {
            setPhoneError('Số điện thoại không hợp lệ');
        } else {
            setPhoneError('');
        }
    };

    const RegisterClick = async () => {
        if (!usernameError && !passwordError && !emailError && !phoneError) {
            navigation.navigate(SCREENS.LOGIN);
        } else {

        }
    }

    return (
        <KeyboardAvoidingViewWrapper>
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image source={IMAGES.LogoLogin} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.content}>Đăng Ký</Text>
                </View>
                <View>
                    <PaperTextInput
                        label="Tên người dùng"
                        style={styles.textInput}
                        theme={{ colors: { primary: COLORS.HEX_ORANGE } }}
                        left={<PaperTextInput.Icon icon="account" color={COLORS.HEX_ORANGE} />}
                        value={username}
                        onChangeText={handleUsernameChange}
                        error={!!usernameError}
                    />
                    {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
                    <PaperTextInput
                        label="Mật khẩu"
                        style={styles.textInput}
                        theme={{ colors: { primary: COLORS.HEX_ORANGE } }}
                        secureTextEntry={!showPassword}
                        left={<PaperTextInput.Icon icon="lock" color={COLORS.HEX_ORANGE} />}
                        right={
                            <PaperTextInput.Icon
                                icon={showPassword ? 'eye-off' : 'eye'}
                                onPress={togglePasswordVisibility}
                                color={COLORS.HEX_ORANGE}
                            />
                        }
                        value={password}
                        onChangeText={handlePasswordChange}
                        error={!!passwordError}
                    />
                    {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                    <PaperTextInput
                        label="Email"
                        style={styles.textInput}
                        theme={{ colors: { primary: COLORS.HEX_ORANGE } }}
                        left={<PaperTextInput.Icon icon="email" color={COLORS.HEX_ORANGE} />}
                        value={email}
                        onChangeText={handleEmailChange}
                        error={!!emailError}
                    />
                    {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                    <PaperTextInput
                        label="Số điện thoại"
                        style={styles.textInput}
                        theme={{ colors: { primary: COLORS.HEX_ORANGE } }}
                        left={<PaperTextInput.Icon icon="phone" color={COLORS.HEX_ORANGE} />}
                        value={phone}
                        onChangeText={handlePhoneChange}
                        error={!!phoneError}
                    />
                    {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}
                </View>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Pressable style={styles.buttonRegister} onPress={RegisterClick}>
                        <Text style={styles.textButton}>ĐĂNG KÝ</Text>
                    </Pressable>
                </View>
                <View style={[styles.viewRemember, { marginTop: 20, justifyContent: 'center' }]}>
                    <Text style={{ fontSize: 16, color: COLORS.WHITE }}>Bạn đã có tài khoản?</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate(SCREENS.LOGIN) }}>
                        <Text style={{ color: COLORS.HEX_ORANGE, fontSize: 16 }}>  Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingViewWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        marginStart: 10,
        marginEnd: 10,
    },
    image: {
        width: 370,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    textInput: {
        marginBottom: 10,
        backgroundColor: COLORS.WHITE,
        borderWidth: 2,  // Độ rộng của đường viền
        borderColor: COLORS.HEX_ORANGE,
    },
    errorText: {
        color: COLORS.RED,
        fontSize: 14,
        marginBottom: 5,
    },
    content: {
        color: COLORS.WHITE,
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 40
    },
    viewRemember: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonRegister: {
        height: 48,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.HEX_ORANGE,
        borderRadius: 10
    },
    textButton: {
        color: COLORS.WHITE,
        fontWeight: 'bold',
        fontSize: 20
    },

})

export default RegisterScreen;
