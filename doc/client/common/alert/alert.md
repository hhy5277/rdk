
# 简介 #

Alert 服务用于弹出提示信息的对话框，可能包含消息、标题、按钮（“确定”、“取消”、“是”和“否”的任意组合）和图标。

---
# 对话框 #

提示信息对话框目前支持四种表现形式：

- 信息确认对话框，调用时直接使用 `Alert.confirm(message, title, button, callback, modal)`
- 错误提示对话框，调用时直接使用 `Alert.error(message, title, button, callback, modal)` 
- 普通信息提示对话框，调用时直接使用 `Alert.info(message, title, button, callback, modal)`
- 警告提示对话框，调用时直接使用 `Alert.warn(message, title, button, callback, modal)`

## 参数 ##

### message ###
> 字符串类型

对话框消息内容主体。`message`设置成 `空字符串` 或者`null` 时，窗口内容默认为空。

### title ###
> 字符串类型

对话框标题栏信息。`title`设置成 `空字符串` 或者`null` 时，窗口标题默认为空。

### button ###
> 数值型

四种按钮“确定”、“取消”、“是”和“否”的任意组合。

 - “是”对应数值`1`，即 `ButtonTypes.YES`
 - “否”对应数值`2`，即 `ButtonTypes.NO`
 - “确定”对应数值`4`，即 `ButtonTypes.OK`
 - “取消”对应数值`8`，即 `ButtonTypes.CANCEL`

例如:参数`button`设置成`11`，表示是 `YES/NO/CANCEL` 的组合。界面出现的是 `是/否/取消` 三个按钮。
      参数`button`设置成`5`，表示是 `YES/OK` 的组合。界面出现的是 `是/确定` 两个按钮。以此类推。

`button`设置成 `空字符串` 或者`null` 时，调用`confirm`方法时默认有`是/否/取消`三个按钮。

四种按钮中的文字内容是可以改动的。方法如下：
创建一个国际化文件i18n.js,里面四个参数对应相应的四种按钮,
如 ButtonTypes.YES对应`alert_yes`,改变其文字就可以改变对应按钮的文字内容。<br>
注意：国际化文件要在根控制里调用。具体用法见下事例：

 <live_demo example="common/alert/demoi18n" width="900" height="400"></live_demo>

**<font color=red>注意</font>**

### callback ###
> 回调函数

单击 `是/否/取消/确定` 四个按钮后调用的方法。

	        function callbackHandler(val){
	            if(val == ButtonTypes.YES){
	                alert('call back YES');
	            }
	            if(val == ButtonTypes.NO){
	                alert('call back NO');
	            }
	            if(val == ButtonTypes.OK){
	                alert('call back OK');
	            } 
	            if(val == ButtonTypes.CANCEL){
	                alert('call back CANCEL');
	            }        
	        }

### modal ###
> 布尔型

取值只可能是 `true` 或者 `false` 两种。代表模态和非模态。当最后一个参数缺省时，`modal` 才可以缺省，缺省时默认为`true`。

- `modal` 设置成 `true` 时，代表弹出框为模态窗口。
- `modal` 设置成 `false` 时，代表弹出框为非模态窗口。

`modal`设置成 `空字符串` 或者`null`时，默认弹出框是模态窗口。

# 对话框示例 #

## 信息确认 ##

		Alert.confirm('信息确认请注意', '确认提示',
			ButtonTypes.YES+ButtonTypes.NO+ButtonTypes.CANCEL, callbackHandler);

`Alert.confirm()`详细示例：
<live_demo example="common/alert/confirm" width="900" height="400"></live_demo>


## 错误提示 ##

            Alert.error('内部发生错误请注意', '错误提示', ButtonTypes.OK, callbackHandler);

`Alert.error()`详细示例：
<live_demo example="common/alert/error" width="900" height="400"></live_demo>

## 普通信息提示 ##

            Alert.info('提示信息请注意', '信息提示', ButtonTypes.OK, callbackHandler);

`Alert.info()`详细示例：
<live_demo example="common/alert/info" width="900" height="400"></live_demo>

## 警告提示 ##

            Alert.warn('发生警告请注意', '警告提示', ButtonTypes.OK, callbackHandler);

`Alert.warn()`详细示例：
<live_demo example="common/alert/warn" width="900" height="400"></live_demo>

## 非模态Alert ##

			Alert.confirm('信息确认请注意', '确认提示', 
				ButtonTypes.YES+ButtonTypes.NO+ButtonTypes.CANCEL, callbackHandler, false);
注意到这里的`modal`参数值传的是`false`，表示弹出非模态提示框。

以`confirm`为例，演示非模态提示框：
<live_demo example="common/alert/none_modal" width="900" height="400"></live_demo>


## 缺省所有形参 ##

			Alert.confirm();
注意到这里缺省了所有参数。

以`confirm`为例，演示缺省所有形参时的提示框：
<live_demo example="common/alert/param_default" width="900" height="400"></live_demo>

## 手动销毁对话框 ##

<font color=red>**注意**</font>
*confirm/error/info/warn* 会返回 alert对话框的 *popupModuleID*，可以用于：

 - 注册监听对话框右上角关闭按钮的 *CLOSE* 事件
 
 		EventService.register(moduleID, EventTypes.CLOSE, function(event, data){...});

 - 手动调用销毁alert对话框
 
		Alert.remove(popupModuleID)


以`confirm`为例，演示对话框销毁 *remove* 及 *CLOSE* 事件监听：
<live_demo example="common/alert/demo4remove" width="900" height="400"></live_demo>