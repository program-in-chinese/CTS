
/////////////////////////////
/// Windows Script Host APIS
/////////////////////////////

//@@{ ActiveX对象_:ActiveXObject }
接口 ActiveX对象_ {
    新建 (s: 文字): 任意;

}
//@@{ ActiveX对象_:ActiveXObject }
声明 值量 ActiveX对象_: ActiveX对象_;
//@@{ 文本作者接口_:ITextWriter }
接口 文本作者接口_ {
    //@@{ 写出_:Write }
    写出_(s: 文字): 无值;
    //@@{ 写行_:WriteLine }
    写行_(s: 文字): 无值;
    //@@{ 关闭_:Close }
    关闭_(): 无值;

}
//@@{ 文本流基类_:TextStreamBase }
接口 文本流基类_ {

    /**
     * The column number of the current character position in an input stream.
     */
    //@@{ 列_:Column }
    列_: 数字;

    /**
     * The current line number in an input stream.
     */
    //@@{ 行_:Line }
    行_: 数字;

    /**
     * Closes a text stream.
     * It is not necessary to close standard streams; they close automatically when the process ends. If
     * you close a standard stream, be aware that any other pointers to that standard stream become invalid.
     */
    //@@{ 关闭_:Close }
    关闭_(): 无值;

}
//@@{ 文本流作者_:TextStreamWriter, 文本流基类_:TextStreamBase }
接口 文本流作者_ 扩展 文本流基类_ {

    /**
     * Sends a string to an output stream.
     */
    //@@{ 写出_:Write }
    写出_(s: 文字): 无值;

    /**
     * Sends a specified number of blank lines (newline characters) to an output stream.
     */
    //@@{ 写空白行_:WriteBlankLines }
    写空白行_(行数: 数字): 无值;

    /**
     * Sends a string followed by a newline character to an output stream.
     */
    //@@{ 写行_:WriteLine }
    写行_(s: 文字): 无值;

}
//@@{ 文本流读者_:TextStreamReader, 文本流基类_:TextStreamBase }
接口 文本流读者_ 扩展 文本流基类_ {

    /**
     * Returns a specified number of characters from an input stream, starting at the current pointer position.
     * Does not return until the ENTER key is pressed.
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
     */
    //@@{ 读出_:Read }
    读出_(字符: 数字): 文字;

    /**
     * Returns all characters from an input stream.
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
     */
    //@@{ 读出所有_:ReadAll }
    读出所有_(): 文字;

    /**
     * Returns an entire line from an input stream.
     * Although this method extracts the newline character, it does not add it to the returned string.
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
     */
    //@@{ 读出一行_:ReadLine }
    读出一行_(): 文字;

    /**
     * Skips a specified number of characters when reading from an input text stream.
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
     * @param 字符 Positive number of characters to skip forward. (Backward skipping is not supported.)
     */
    //@@{ 跳过_:Skip }
    跳过_(字符: 数字): 无值;

    /**
     * Skips the next line when reading from an input text stream.
     * Can only be used on a stream in reading mode, not writing or appending mode.
     */
    //@@{ 跳过一行_:SkipLine }
    跳过一行_(): 无值;

    /**
     * Indicates whether the stream pointer position is at the end of a line.
     */
    //@@{ 在结束行_:AtEndOfLine }
    在结束行_: 真假;

    /**
     * Indicates whether the stream pointer position is at the end of a stream.
     */
    //@@{ 在结束流_:AtEndOfStream }
    在结束流_: 真假;

}
声明 值量 WScript: {

    /**
     * Outputs text to either a message box (under WScript.exe) or the command console window followed by
     * a newline (under CScript.exe).
     */
    //@@{ 回声_:Echo }
    回声_(s: 任意): 无值;

    /**
     * Exposes the write-only error output stream for the current script.
     * Can be accessed only while using CScript.exe.
     */
    //@@{ 标准错误_:StdErr, 文本流作者_:TextStreamWriter }
    标准错误_: 文本流作者_;

    /**
     * Exposes the write-only output stream for the current script.
     * Can be accessed only while using CScript.exe.
     */
    //@@{ 标准输出_:StdOut, 文本流作者_:TextStreamWriter }
    标准输出_: 文本流作者_;
    //@@{ 参数_:Arguments, 长度:length, 项目_:Item }
    参数_: { 长度: 数字; 项目_(n: 数字): 文字; };

    /**
     *  The full path of the currently running script.
     */
    //@@{ 脚本全名_:ScriptFullName }
    脚本全名_: 文字;

    /**
     * Forces the script to stop immediately, with an optional exit code.
     */
    //@@{ 立即停止_:Quit }
    立即停止_(退出代码?: 数字): 数字;

    /**
     * The Windows Script Host build version number.
     */
    //@@{ 构建版本_:BuildVersion }
    构建版本_: 数字;

    /**
     * Fully qualified path of the host executable.
     */
    //@@{ 全名_:FullName }
    全名_: 文字;

    /**
     * Gets/sets the script mode - interactive(true) or batch(false).
     */
    //@@{ 互动_:Interactive }
    互动_: 真假;

    /**
     * The name of the host executable (WScript.exe or CScript.exe).
     */
    //@@{ 名称_:Name }
    名称_: 文字;

    /**
     * Path of the directory containing the host executable.
     */
    //@@{ 路径_:Path }
    路径_: 文字;

    /**
     * The filename of the currently running script.
     */
    //@@{ 脚本名称_:ScriptName }
    脚本名称_: 文字;

    /**
     * Exposes the read-only input stream for the current script.
     * Can be accessed only while using CScript.exe.
     */
    //@@{ 标准输入_:StdIn, 文本流读者_:TextStreamReader }
    标准输入_: 文本流读者_;

    /**
     * Windows Script Host version
     */
    //@@{ 版本_:Version }
    版本_: 文字;

    /**
     * Connects a COM object's event sources to functions named with a given prefix, in the form prefix_event.
     */
    //@@{ 连接对象_:ConnectObject }
    连接对象_(对象事件源: 任意, str前缀: 文字): 无值;

    /**
     * Creates a COM object.
     * @param strProgiID
     * @param 函数前缀 Function names in the form prefix_event will be bound to this object's COM events.
     */
    //@@{ 创建对象_:CreateObject }
    创建对象_(程序标识: 文字, 函数前缀?: 文字): 任意;

    /**
     * Disconnects a COM object from its event sources.
     */
    //@@{ 断开连接对象_:DisconnectObject }
    断开连接对象_(对象: 任意): 无值;

    /**
     * Retrieves an existing object with the specified ProgID from memory, or creates a new one from a file.
     * @param str路径名 Fully qualified path to the file containing the object persisted to disk.
     *                       For objects in memory, pass a zero-length string.
     * @param 程序标识
     * @param str前缀 Function names in the form prefix_event will be bound to this object's COM events.
     */
    //@@{ 取实例_:GetObject }
    取实例_(str路径名: 文字, 程序标识?: 文字, str前缀?: 文字): 任意;

    /**
     * Suspends script execution for a specified length of time, then continues execution.
     * @param 初始时间 Interval (in milliseconds) to suspend script execution.
     */
    //@@{ 睡眠_:Sleep }
    睡眠_(初始时间: 数字): 无值;

};
/**
 * Represents an Automation SAFEARRAY
 */
//@@{ 安全数组_:SafeArray }
声明 类别 安全数组_<T = 任意> {
    私有 构造();
    //@@{ 安全数组_:SafeArray }
    私有 安全数组_类型键_: 安全数组_<T>;

}
/**
 * Allows enumerating over a COM collection, which may not have indexed item access.
 */
//@@{ 枚举器_:Enumerator }
接口 枚举器_<T = 任意> {

    /**
     * Returns true if the current item is the last one in the collection, or the collection is empty,
     * or the current item is undefined.
     */
    //@@{ 在结束:atEnd }
    在结束(): 真假;

    /**
     * Returns the current item in the collection
     */
    //@@{ 项目:item }
    项目(): T;

    /**
     * Resets the current item in the collection to the first item. If there are no items in the collection,
     * the current item is set to undefined.
     */
    //@@{ 移动首个:moveFirst }
    移动首个(): 无值;

    /**
     * Moves the current item to the next item in the collection. If the enumerator is at the end of
     * the collection or the collection is empty, the current item is set to undefined.
     */
    //@@{ 移动下个:moveNext }
    移动下个(): 无值;

}
//@@{ 枚举器构造函数_:EnumeratorConstructor }
接口 枚举器构造函数_ {
    //@@{ 安全数组_:SafeArray, 枚举器_:Enumerator }
    新建 <T = 任意>(安全数组: 安全数组_<T>): 枚举器_<T>;
    //@@{ 枚举器_:Enumerator }
    新建 <T = 任意>(集合: { 项目_(索引: 任意): T }): 枚举器_<T>;
    //@@{ 枚举器_:Enumerator }
    新建 <T = 任意>(集合: 任意): 枚举器_<T>;

}
//@@{ 枚举器_:Enumerator, 枚举器构造函数_:EnumeratorConstructor }
声明 值量 枚举器_: 枚举器构造函数_;

/**
 * Enables reading from a COM safe array, which might have an alternate lower bound, or multiple dimensions.
 */
//@@{ VB数组_:VBArray }
接口 VB数组_<T = 任意> {

    /**
     * Returns the number of dimensions (1-based).
     */
    //@@{ 维数:dimensions }
    维数(): 数字;

    /**
     * Takes an index for each dimension in the array, and returns the item at the corresponding location.
     */
    //@@{ 取项目:getItem }
    取项目(维度1索引: 数字, ...维度N索引: 数字[]): T;

    /**
     * Returns the smallest available index for a given dimension.
     * @param 维度 1-based dimension (defaults to 1)
     */
    //@@{ 最小索引:lbound }
    最小索引(维度?: 数字): 数字;

    /**
     * Returns the largest available index for a given dimension.
     * @param 维度 1-based dimension (defaults to 1)
     */
    //@@{ 最大索引:ubound }
    最大索引(维度?: 数字): 数字;

    /**
     * Returns a Javascript array with all the elements in the VBArray. If there are multiple dimensions,
     * each successive dimension is appended to the end of the array.
     * Example: [[1,2,3],[4,5,6]] becomes [1,2,3,4,5,6]
     */
    //@@{ 转为数组:toArray }
    转为数组(): T[];

}
//@@{ VB数组构造函数_:VBArrayConstructor }
接口 VB数组构造函数_ {
    //@@{ 安全数组_:SafeArray, VB数组_:VBArray }
    新建 <T = 任意>(安全数组: 安全数组_<T>): VB数组_<T>;

}
//@@{ VB数组_:VBArray, VB数组构造函数_:VBArrayConstructor }
声明 值量 VB数组_: VB数组构造函数_;

/**
 * Automation date (VT_DATE)
 */
//@@{ 值日期_:VarDate }
声明 类别 值日期_ {
    私有 构造();
    //@@{ 值日期_:VarDate }
    私有 值日期_类型键_: 值日期_;

}
//@@{ 日期构造函数_:DateConstructor }
接口 日期构造函数_ {
    //@@{ 值日期_:VarDate, 日期_:Date }
    新建 (vd: 值日期_): 日期_;

}
//@@{ 日期_:Date }
接口 日期_ {
    //@@{ 值日期_:VarDate }
    取值日期: () => 值日期_;

}
