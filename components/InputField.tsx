import { View, Text, KeyboardAvoidingView, Image, TextInput, Platform, Keyboard } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { InputFieldProps } from '@/types/type'

const InputField = ({
    label,
    labelStyle,
    icon,
    secureTextEntry = false,
    containerStyle,
    inputStyle,
    iconStyle,
    className,
    ...props
}: InputFieldProps) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            {/* Keyboard.dismiss to close keyboard when click out of it */}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className='my-2 w-full '>
                    <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
                        {label}
                    </Text>
                    <View className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 ${containerStyle}`}>
                        {
                            icon && <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
                        }
                        <TextInput
                            className={`rounded-full p-4 font-JakartaSemiBold placeholder:text-neutral-300 text-[15px] flex-1 ${inputStyle} text-left`}
                            secureTextEntry={secureTextEntry}
                            {...props}
                        >

                        </TextInput>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default InputField