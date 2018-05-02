
//@@{ 文字_:String }
接口 文字_ {

    /**
     * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
     * The padding is applied from the start (left) of the current string.
     *
     * @param 最大长度 The length of the resulting string once the current string has been padded.
     *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
     *
     * @param 填充字符 The string to pad the current string with.
     *        If this string is too long, it will be truncated and the left-most part will be applied.
     *        The default value for this parameter is " " (U+0020).
     */

    //##{ padStart:添入开始, maxLength:最大长度, fillString:填充字符 }#
    添入开始(最大长度: 数字, 填充字符?: 文字): 文字;

    /**
     * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
     * The padding is applied from the end (right) of the current string.
     *
     * @param 最大长度 The length of the resulting string once the current string has been padded.
     *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
     *
     * @param 填充字符 The string to pad the current string with.
     *        If this string is too long, it will be truncated and the left-most part will be applied.
     *        The default value for this parameter is " " (U+0020).
     */

    //##{ padEnd:添入结尾, maxLength:最大长度, fillString:填充字符 }#
    添入结尾(最大长度: 数字, 填充字符?: 文字): 文字;
}
