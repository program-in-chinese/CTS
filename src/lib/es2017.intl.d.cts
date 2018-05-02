//@@{ 日期时间格式部件类型_:DateTimeFormatPartTypes }
//@@{ "天":"day", "一天":"dayPeriod", "时代":"era", "小时":"hour", "字面量":"literal", "分钟":"minute", "月":"month", "秒":"second", "时区名称":"timeZoneName", "工作日":"weekday", "年":"year" }
类型 日期时间格式部件类型_ = "天" | "一天" | "时代" | "小时" | "字面量" | "分钟" | "月" | "秒" | "时区名称" | "工作日" | "年";

//@@{ 日期时间格式部件_:DateTimeFormatPart }
接口 日期时间格式部件_ {

    //@@{ 类型:type, 日期时间格式部件类型_:DateTimeFormatPartTypes }
    类型: 日期时间格式部件类型_;

    //@@{ 值:value }
    值: 文字;

}

//@@{ 日期时间格式_:DateTimeFormat }
接口 日期时间格式_ {

    //@@{ 格式化部件:formatToParts, 日期:date, 日期_:Date, 日期时间格式部件_:DateTimeFormatPart }
    格式化部件(日期?: 日期_ | 数字): 日期时间格式部件_[];
}
