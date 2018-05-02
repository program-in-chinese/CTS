/**

 * Represents the completion of an asynchronous operation
 */

//@@{ 预设_:Promise }
接口 预设_<T> {

    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param 正在最后 The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */

    //@@{ 最后:finally, 正在最后:onfinally, 预设_:Promise }
    最后(正在最后?: (() => 无值) | 未定 | 空值): 预设_<T>
}
