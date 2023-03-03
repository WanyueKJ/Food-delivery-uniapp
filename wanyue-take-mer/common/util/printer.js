import iconv from "iconv-lite" 


let printer = module.exports;

let charWSize = 1
let maxDots = 384
let printCmd = [0x1b,0x40]


//long转换未字节数组
printer.longToByteArray = function longToByteArray(/*long*/number) {
    // we want to represent the input as a 8-bytes array
    let byteArray = [0, 0, 0, 0, 0, 0, 0, 0];

    for ( let index = 0; index < byteArray.length; index ++ ) {
        let byte = number & 0xff;
        byteArray [ index ] = byte;
        number = (number - byte) / 256 ;
    }
		
    return byteArray;
}

//字节数组转long
printer.byteArrayToLong = function byteArrayToLong(/*byte[]*/byteArray) {
	
    let value = 0
	
    for ( let i = byteArray.length - 1; i >= 0; i--) {
        value = (value * 256) + byteArray[i];
    }

    return value;
}

//设置文本对齐方式
printer.setAlignment = function setAlignment(n){
	
	let cmd = [0x1b, 0x61]
	
	let align = printer.longToByteArray(n)
	
	cmd = cmd.concat(align)
	
	return cmd
	
}

//设置打印模式，加粗，倍宽，倍高等
printer.setPrintModes = function setPrintModes(bold,h,w){
	
	let n = 0
	
	if (bold){
		n |= 8
	}
	if (h){
		n |= 16
	}
	if (w){
		n |= 32
	}
	charWSize = w
	
    let printModes = printer.longToByteArray(n)
	
    return 	printModes	
	
}

//设置字符串大小
printer.setCharacterSize = function setCharacterSize(w,h){
	
	let cmd = [0x1d, 0x21]
	
	let n = 0
	
	if (h >= 1 && h <= 8){
		n |= (h - 1)
	}
		
	if (w >= 1 && w <= 8) {
		n |= (w - 1) << 4
		charWSize = w
	}
	
	let align = printer.longToByteArray(n)
	
	cmd = cmd.concat(align)
	
	return cmd
	
}

//换行
printer.lineFeed = function lineFeed(n){
	
	let cmd = [0x0a]
	
	for (let i = 0; i < n - 1 ; i++) {
		cmd =  cmd.concat(cmd)
	}
	
	return cmd;
	
}

//星号
printer.asterisk = function asterisk(n){
	
	let cmd = [0x2a]
	
	for (let i = 0; i < n - 1 ; i++) {
		cmd =  cmd.concat(cmd)
	}
	
	return cmd;
}

//横杠
printer.horizontalBar = function horizontalBar(n){
	
	let cmd = [0x2d]
	
	for (let i = 0; i < n - 1 ; i++) {
		cmd =  cmd.concat(cmd)
	}
	
	return cmd;
}

//空格
printer.space = function space(n){
	
	let cmd = [0x20]
	
	for (let i = 0; i < n - 1 ; i++) {
		cmd =  cmd.concat(cmd)
	}
	
	return cmd;
}

//星+空格
printer.asteriskSpace = function asteriskSpace(n){
	
	let cmd = [0x2a,0x20]
	
	for (let i = 0; i < n - 1 ; i++) {
		cmd =  cmd.concat(cmd)
	}
	
	return cmd;
}

//设置绝对位置
printer.setAbsolutePrintPosition = function setAbsolutePrintPosition(n){
	
	let cmd = [0x1b,0x24]
	
	let l = n & 0xff
	
	let h = (n >> 8) & 0xff
		
	cmd = cmd.concat(l,h)
	
	return cmd
	
}

//获取字符宽度
printer.widthOfChar = function widthOfChar(c){
	if(c == 0x0a3a4){
		return 24
	}
	if ((c >= 0x00020 && c <= 0x0036f) ||
		(c >= 0x0ff61 && c <= 0x0ff9f))
		return 12
	if ((c == 0x02010                ) ||
		(c >= 0x02013 && c <= 0x02016) ||
		(c >= 0x02018 && c <= 0x02019) ||
		(c >= 0x0201c && c <= 0x0201d) ||
		(c >= 0x02025 && c <= 0x02026) ||
		(c >= 0x02030 && c <= 0x02033) ||
		(c == 0x02035                ) ||
		(c == 0x0203b                ))
		return 24
	if ((c >= 0x01100 && c <= 0x011ff) ||
		(c >= 0x02460 && c <= 0x024ff) ||
		(c >= 0x025a0 && c <= 0x027bf) ||
		(c >= 0x02e80 && c <= 0x02fdf) ||
		(c >= 0x03000 && c <= 0x0318f) ||
		(c >= 0x031a0 && c <= 0x031ef) ||
		(c >= 0x03200 && c <= 0x09fff) ||
		(c >= 0x0ac00 && c <= 0x0d7ff) ||
		(c >= 0x0f900 && c <= 0x0faff) ||
		(c >= 0x0fe30 && c <= 0x0fe4f) ||
		(c >= 0x1f000 && c <= 0x1f9ff))
		return 24
	if ((c >= 0x0ff01 && c <= 0x0ff5e) ||
		(c >= 0x0ffe0 && c <= 0x0ffe5))
		return 24
	return 0
	
}

//获取宽度
printer.widthOfString =  function widthOfString(str){
	
	let   i, width = 0
	
	for (i = 0; i < str.length; i++) {
		let hex = "0x" + iconv.encode(str.charAt(i), 'GB18030').toString("hex")
		let intChar = parseInt(hex,16)
		width += printer.widthOfChar(intChar)
	}
	return width * charWSize
	
}

//设置默认宽度倍数
printer.setDefaultCharWSize =  function setDefaultCharWSize(){
	charWSize = 1
}

//打印数组
printer.printColumns = function printColumns(texts,widths,aligns){
	
	let columns = [] 
	
	let lines = []
		
	for (let i = 0; i < texts.length; i++) {
		if(i == 0){
			let text0 = texts[i]
			let text1 = texts[i + 1]
			let width0 = widths[i]
			let width1 = widths[i + 1]
			let widthTotal = width0 + width1 
			let textWidth0 = printer.widthOfString(text0)
			let textWidth1 = printer.widthOfString(text1)
			let textWidthTotal = textWidth0 + textWidth1
			
			if(textWidth0 > maxDots){
				textWidthTotal = textWidthTotal % maxDots
			}
			if(textWidthTotal >= widthTotal){
				lines.push(1)
			}else{
				lines.push(0)
			}
		}else{
			lines.push(0)
		}
		
		
	}	
		
	let pos = 0
	for (let i = 0; i < texts.length; i++) {
		let text = texts[i]
		let textWidth = printer.widthOfString(text)
		let width = widths[i]
		let align = aligns[i]
		let position = []
		switch(align){
			case 0:
			    position = printer.setAbsolutePrintPosition(pos) 
				break
			case 1:
			    position = printer.setAbsolutePrintPosition(pos + (width - textWidth) / 2) 
				break
			case 2:
			    position = printer.setAbsolutePrintPosition(pos + (width - textWidth)) 	
				break
		}
		
		let data = iconv.encode(text, 'GB18030').toJSON().data
			
		columns = columns.concat(position,data)
		
		let lineFeed = lines[i]
		if(lineFeed > 0){
			columns = columns.concat(printer.lineFeed(lineFeed))
		}
						
		pos = pos + width
		
		console.error("pos-----------" + pos)
	}
	
	let line = printer.lineFeed(1)
	
	columns = columns.concat(line)
	
	return columns
	
}

printer.append =  function append(data){
    printCmd = printCmd.concat(data)
}

printer.init =  function init(){
	printCmd = [0x1b,0x40]
}

printer.appendLine =  function appendLine(n){
	printer.append( printer.lineFeed(n) )
}

printer.appendText =  function appendText(text){
	printer.append( iconv.encode(text, 'GB18030').toJSON().data )
}

printer.appendBars =  function appendBars(){
	
	let barCount = maxDots/printer.widthOfString("-")
	
	for (var i = 0; i < barCount; i++) {
		printer.appendText("-") 
	}
	
	printer.appendLine(1)
	
}

printer.appendAlignment =  function appendAlignment(n){
	printer.append(printer.setAlignment(n)) 
}

printer.appendCharacterSize = function appendCharacterSize(w,h){
	printer.append(printer.setCharacterSize(w,h))
}

printer.appendColumns = function appendColumns(texts,widths,aligns){
	printer.append( printer.printColumns(texts,widths,aligns) )
}


printer.getPrintBytes =  function getPrintBytes(object){
	
	let app_name = "#"+object.orders.id + " " + object.app_name
	let store_name = object.store.use_name
	let scheduled_time = object.orders.scheduled_time
	let add_time = object.orders.add_time
	let mark =   object.orders.mark
	let products = object.product 
	let freight_price = object.orders.freight_price
	let pay_price =  object.orders.pay_price
	let nick_name = object.users.user_nickname
	let mobile = object.address.mobile
	let address = object.address.place + object.address.addr
	let serve_name = object.serve ?  object.serve.name : ''
	
	
	printer.init()
	
	printer.appendAlignment(1)
	
	printer.appendCharacterSize(2,2)
	
	printer.appendText(app_name) 
	
	printer.appendLine(2)
	
	printer.appendCharacterSize(1,1)
	
	printer.appendText(store_name)
	
	printer.appendLine(1)
	
	printer.appendCharacterSize(1,2)
	
	printer.appendBars()
	
	let texts = ["* * * * * *"," 预定单 ","* * * * * *"]
	
	let widthOfText  = printer.widthOfString(" 预定单 ")
	
	let remain = maxDots - widthOfText
	let widths = [remain/2,widthOfText,remain/2]
	let aligns = [0,1,2]
	
	printer.appendColumns(texts,widths,aligns)
	
	printer.appendAlignment(1)
	
	printer.appendText("期望送达时间：" + scheduled_time)
	
	printer.appendLine(1)
	
	printer.appendCharacterSize(1,1)
	 
	printer.appendBars()
	
	printer.appendAlignment(0)
	
	printer.appendText("下单时间:"+add_time)
	
	printer.appendLine(1)
	
	printer.appendCharacterSize(1,2) 
	
	printer.appendText("备注："+ mark)
	
	printer.appendLine(1)
	
	if (serve_name){
		
		printer.appendText("服务："+ serve_name)
		
		printer.appendLine(1)
		
	}
	 
	printer.appendCharacterSize(1,1)
	
	printer.appendBars()
	
	  texts = ["菜名","数量","小计"]
	  remain = maxDots - (96 + 144)
	  widths = [96,144,remain]
	  aligns = [0,2,2]
	
	 printer.appendColumns(texts,widths,aligns) 
	
	 printer.appendBars()
	
	 printer.appendCharacterSize(1,2) 
	
	 console.error("==========")
	
	 for (var i = 0; i < products.length; i++) {
	 	 let product  = products[i]
		 let attr_name = product.attr_name ? '('+ product.attr_name +')' : ''
		 texts = [product.use_name + attr_name ,"x"+product.cart_num,String(product.use_price)]
	     remain = maxDots - (96 + 144)
	     widths = [96,144,remain]
	     aligns = [0,2,2]
		  
		 printer.appendColumns(texts,widths,aligns)
	 }
	 
	 console.error("==========")
	 
	printer.appendCharacterSize(1,1) 
	 
	printer.appendBars()	
		
	texts = ["配送费",freight_price]
	remain = maxDots - 96
	widths = [remain,96]
	aligns = [0,2]
		
	printer.appendColumns(texts,widths,aligns) 
	
	// texts = ["餐盒费","1"]
	// remain = maxDots - 96
	// widths = [remain,96]
	// aligns = [0,2]
		
	// printer.appendColumns(texts,widths,aligns) 
		
	// texts = ["[超时赔付]详见订单","1"]
	// remain = maxDots - 96
	// widths = [remain,96]
	// aligns = [0,2]
		
	// printer.appendColumns(texts,widths,aligns) 
	
	// texts = ["可口可乐：x1",""]
	// remain = maxDots - 96
	// widths = [remain,96]
	// aligns = [0,2]
		
	// printer.appendColumns(texts,widths,aligns) 
	
	printer.appendBars()	
	
	printer.appendCharacterSize(1,2)
	
	texts = ["合计",pay_price + "元"]
	remain = maxDots - 96
	widths = [remain,96]
	aligns = [0,2]
	
	printer.appendColumns(texts,widths,aligns) 
	
	printer.appendCharacterSize(1,1) 
	
	printer.appendBars()
	
	printer.appendCharacterSize(2,2) 
	
	printer.appendText(nick_name +  " " + mobile + " " + "地址信息:"+address)
	
	printer.appendCharacterSize(1,1) 
	
	printer.appendLine(1)
	
	printer.appendBars()
	
	printer.appendLine(3)
		
	return printCmd
	
	
}

printer.getPrintHexString =  function getPrintHexString(object){
	
	  let printeBytes = printer.getPrintBytes(object)
	  let printHexString = Buffer.from(printeBytes).toString("hex")
	  return printHexString
		  
}
