/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <引用 不用默认库="真"/>
/////////////////////////////
/// Windows Script Host APIS
/////////////////////////////

接口 ActiveXObject {

    新建 (s: 文字): 任意;

}

声明 值量 ActiveXObject: ActiveXObject;

接口 ITextWriter {

    Write(s: 文字): 无值;

    WriteLine(s: 文字): 无值;

    Close(): 无值;

}

接口 TextStreamBase {

    /**
     * The column number of the current character position in an input stream.
     */

    Column: 数字;

    /**
     * The current line number in an input stream.
     */

    Line: 数字;

    /**
     * Closes a text stream.
     * It is not necessary to close standard streams; they close automatically when the process ends. If
     * you close a standard stream, be aware that any other pointers to that standard stream become invalid.
     */

    Close(): 无值;

}

接口 TextStreamWriter 扩展 TextStreamBase {

    /**
     * Sends a string to an output stream.
     */

    Write(s: 文字): 无值;

    /**
     * Sends a specified number of blank lines (newline characters) to an output stream.
     */

    WriteBlankLines(intLines: 数字): 无值;

    /**
     * Sends a string followed by a newline character to an output stream.
     */

    WriteLine(s: 文字): 无值;

}

接口 TextStreamReader 扩展 TextStreamBase {

    /**
     * Returns a specified number of characters from an input stream, starting at the current pointer position.
     * Does not return until the ENTER key is pressed.
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
     */

    Read(characters: 数字): 文字;

    /**
     * Returns all characters from an input stream.
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
     */

    ReadAll(): 文字;

    /**
     * Returns an entire line from an input stream.
     * Although this method extracts the newline character, it does not add it to the returned string.
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
     */

    ReadLine(): 文字;

    /**
     * Skips a specified number of characters when reading from an input text stream.
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
     * @param characters Positive number of characters to skip forward. (Backward skipping is not supported.)
     */

    Skip(characters: 数字): 无值;

    /**
     * Skips the next line when reading from an input text stream.
     * Can only be used on a stream in reading mode, not writing or appending mode.
     */

    SkipLine(): 无值;

    /**
     * Indicates whether the stream pointer position is at the end of a line.
     */

    AtEndOfLine: 真假;

    /**
     * Indicates whether the stream pointer position is at the end of a stream.
     */

    AtEndOfStream: 真假;

}

声明 值量 WScript: {

    /**
     * Outputs text to either a message box (under WScript.exe) or the command console window followed by
     * a newline (under CScript.exe).
     */

    Echo(s: 任意): 无值;

    /**
     * Exposes the write-only error output stream for the current script.
     * Can be accessed only while using CScript.exe.
     */

    StdErr: TextStreamWriter;

    /**
     * Exposes the write-only output stream for the current script.
     * Can be accessed only while using CScript.exe.
     */

    StdOut: TextStreamWriter;

    Arguments: { length: 数字; Item(n: 数字): 文字; };

    /**
     *  The full path of the currently running script.
     */

    ScriptFullName: 文字;

    /**
     * Forces the script to stop immediately, with an optional exit code.
     */

    Quit(exitCode?: 数字): 数字;

    /**
     * The Windows Script Host build version number.
     */

    BuildVersion: 数字;

    /**
     * Fully qualified path of the host executable.
     */

    FullName: 文字;

    /**
     * Gets/sets the script mode - interactive(true) or batch(false).
     */

    Interactive: 真假;

    /**
     * The name of the host executable (WScript.exe or CScript.exe).
     */

    Name: 文字;

    /**
     * Path of the directory containing the host executable.
     */

    Path: 文字;

    /**
     * The filename of the currently running script.
     */

    ScriptName: 文字;

    /**
     * Exposes the read-only input stream for the current script.
     * Can be accessed only while using CScript.exe.
     */

    StdIn: TextStreamReader;

    /**
     * Windows Script Host version
     */

    Version: 文字;

    /**
     * Connects a COM object's event sources to functions named with a given prefix, in the form prefix_event.
     */

    ConnectObject(objEventSource: 任意, strPrefix: 文字): 无值;

    /**
     * Creates a COM object.
     * @param strProgiID
     * @param strPrefix Function names in the form prefix_event will be bound to this object's COM events.
     */

    CreateObject(strProgID: 文字, strPrefix?: 文字): 任意;

    /**
     * Disconnects a COM object from its event sources.
     */

    DisconnectObject(obj: 任意): 无值;

    /**
     * Retrieves an existing object with the specified ProgID from memory, or creates a new one from a file.
     * @param strPathname Fully qualified path to the file containing the object persisted to disk.
     *                       For objects in memory, pass a zero-length string.
     * @param strProgID
     * @param strPrefix Function names in the form prefix_event will be bound to this object's COM events.
     */

    GetObject(strPathname: 文字, strProgID?: 文字, strPrefix?: 文字): 任意;

    /**
     * Suspends script execution for a specified length of time, then continues execution.
     * @param intTime Interval (in milliseconds) to suspend script execution.
     */

    Sleep(intTime: 数字): 无值;

};
/**
 * Represents an Automation SAFEARRAY
 */

声明 类别 SafeArray<T = 任意> {

    私有 构造();

    私有 SafeArray_typekey: SafeArray<T>;

}
/**
 * Allows enumerating over a COM collection, which may not have indexed item access.
 */

接口 Enumerator<T = 任意> {

    /**
     * Returns true if the current item is the last one in the collection, or the collection is empty,
     * or the current item is undefined.
     */

    atEnd(): 真假;

    /**
     * Returns the current item in the collection
     */

    item(): T;

    /**
     * Resets the current item in the collection to the first item. If there are no items in the collection,
     * the current item is set to undefined.
     */

    moveFirst(): 无值;

    /**
     * Moves the current item to the next item in the collection. If the enumerator is at the end of
     * the collection or the collection is empty, the current item is set to undefined.
     */

    moveNext(): 无值;

}

接口 EnumeratorConstructor {

    新建 <T = 任意>(safearray: SafeArray<T>): Enumerator<T>;

    新建 <T = 任意>(collection: { Item(index: 任意): T }): Enumerator<T>;

    新建 <T = 任意>(collection: 任意): Enumerator<T>;

}

声明 值量 Enumerator: EnumeratorConstructor;

/**
 * Enables reading from a COM safe array, which might have an alternate lower bound, or multiple dimensions.
 */

接口 VBArray<T = 任意> {

    /**
     * Returns the number of dimensions (1-based).
     */

    dimensions(): 数字;

    /**
     * Takes an index for each dimension in the array, and returns the item at the corresponding location.
     */

    getItem(dimension1Index: 数字, ...dimensionNIndexes: 数字[]): T;

    /**
     * Returns the smallest available index for a given dimension.
     * @param dimension 1-based dimension (defaults to 1)
     */

    lbound(dimension?: 数字): 数字;

    /**
     * Returns the largest available index for a given dimension.
     * @param dimension 1-based dimension (defaults to 1)
     */

    ubound(dimension?: 数字): 数字;

    /**
     * Returns a Javascript array with all the elements in the VBArray. If there are multiple dimensions,
     * each successive dimension is appended to the end of the array.
     * Example: [[1,2,3],[4,5,6]] becomes [1,2,3,4,5,6]
     */

    toArray(): T[];

}

接口 VBArrayConstructor {

    新建 <T = 任意>(safeArray: SafeArray<T>): VBArray<T>;

}

声明 值量 VBArray: VBArrayConstructor;

/**
 * Automation date (VT_DATE)
 */

声明 类别 VarDate {

    私有 构造();

    私有 VarDate_typekey: VarDate;

}

//@@{ 日期构造函数_:DateConstructor }
接口 日期构造函数_ {

    //@@{ 日期_:Date }
    新建 (vd: VarDate): 日期_;

}

//@@{ 日期_:Date }
接口 日期_ {

    getVarDate: () => VarDate;
}
