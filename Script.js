{
    class BuildImage
    {constructor(Key,Width,Height,Images_number,OriginX,OriginY,Mask_Type,Mask,MaskOnly)
        {
            this.Key=Key;
            this.Width=Width;
            this.Height=Height;
            this.Images_number=Images_number;
            this.OriginX=OriginX;
            this.OriginY=OriginY;
            var A=new Array();
            A[0]=null;if(!MaskOnly)
            {if(typeof Images_number=='number')
            {for(var i=0;i<Images_number;i++)
                {
                    A[i]=new Image();
                    A[i].src=document.currentScript.src!=""?(document.currentScript.src.split('?')[0].split('/').slice(0,-1).join('/')+'/'+sys.DataFolder+"/"+Key+"__"+i+".png"):sys.DataFolder+"/"+Key+"__"+i+".png";}
                }
                else{this.Images_number=Images_number.length;for(var i=0;i<this.Images_number;i++)
                    {A[i]=new Image();A[i].src='data: image / png; base64,'+Images_number[i];
                }
            }
        }
        this.M=A;
        this.Mask_Type=Mask_Type;
        this.Mask=Masks.MaskToMatrix(Mask,Width);this.MaskOnly=MaskOnly;}
    };
    class BuildTimeLine{constructor(Key,Steps,Codes)
        {this.Key=Key;this.Steps=Steps;this.Codes=Codes;}};
    class BuildObject{constructor(Key,Visible,Depth,ImageSpeed,Img,EventCreate,EventDraw,Group)
        {
            this.Key=Key;
            this.Visible=Visible;
            this.Depth=Depth;
            this.ImageSpeed=ImageSpeed;
            this.Img=Img;
            this.EventCreate=EventCreate;
            this.EventDraw=EventDraw;
            this.Group=Group;
        }
    };
        class BuildRoom{constructor(Key,SnapX,SnapY,Width,Height,Speed,CanvasWidth,CanvasHeight,BackColor,Obj)
            {
                this.Key=Key;
                this.SnapX=SnapX;
                this.SnapY=SnapY;
                this.Width=Width;
                this.Height=Height;
                this.Speed=Speed;
                this.CanvasWidth=CanvasWidth;
                this.CanvasHeight=CanvasHeight;
                this.BackColor=BackColor;
                this.Obj=Obj;
            }
        };
        const Masks={C:"123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",CharToNum(S)
        {for(var i=0,l=this.C.length;i<l;i++)
            if(S==this.C[i])return i+1;return 0;},MaskToMatrix2(a,b)
        {var c,d,e,i,j,f=0,g=0,h=0,k=[];
            for(f=0,e=0,i=a.length;
                f<i;){if("+"==a[f]||"-"==a[f])
                {for(k[e]=[],d=0,j="+"==a[f],f++;
                f<i&&"-"!=a[f]&&"+"!=a[f]&&"="!=a[f]&&"#"!=a[f];)
                {for(c=0;f<i&&"-"!=a[f]&&"+"!=a[f]&&"="!=a[f]&&"#"!=a[f];)
                {if(c+=this.CharToNum(a[f]),"z"!=a[f]){f++;break}f++}for(g=0;g<c;g++)k[e][d++]=j;
                j=!j}for(g=0;d<b;g++)k[e][d++]=j;e++}if(f<i&&"#"==a[f])
                {for(k[e]=[],f++,c=0;f<i&&"-"!=a[f]&&"+"!=a[f]&&"="!=a[f]&&"#"!=a[f];)c+=this.CharToNum(a[f]),f++;for(h=0;h<b;h++)k[e]=k[c];e++}
                if(f<i&&"="==a[f])
                {for(k[e]=[],f++,c=0;f<i&&"-"!=a[f]&&"+"!=a[f]&&"="!=a[f]&&"#"!=a[f];)c+=this.CharToNum(a[f]),f++;
                var l=e-1;for(g=1;g<c;g++)k[e]=k[l],e++}}
                return k},MaskToMatrix(a,b)
                {if(null==a)return[null];else{for(var c=[null],d=0,e=a.length;d<e;d++)c[d]=this.MaskToMatrix2(a[d],b);
                    return c}}};
                    const t={F(){},Img:{Key:"",Width:0,Height:0,Images_number:0,OriginX:0,OriginY:0,A:[null]},
                    TLS(vTL)
                    {
                        this.T=vTL;
                        this.index=0;
                        this.loop=false;
                    },TLS2(vTL,vI,vL){
                        this.T=vTL;
                        this.index=vI;
                        this.loop=vL;
                    },
                    TLP()
                    {
                        this.T=null;
                        this.index=-1;
                        this.loop=
                        false;},
                        FK(a,r)
                        {
                            for(var b=0,l=r.length;b<l;b++)
                            if(r[b].Key==a)return b;return-1},GK(a,r){for(var b=0,l=r.length;b<l;b++)
                                if(r[b].Key==a)return r[b];
                    return null}};
                    let Room=null,
                    ObjecTarget={},ctx,ctxD;
                    const FindImageByKey=function(a){return t.FK(a,Images)},
                    FindObjectByKey=function(a){return t.FK(a,Objects)},
                    FindRoomByKey=function(a){return t.FK(a,Rooms)},
                    GetImageByKey=function(a){return t.GK(a,Images)},
                    GetObjectByKey=function(a){return t.GK(a,Objects)},
                    GetRoomByKey=function(a){return t.GK(a,Rooms)};const 
                    CreateObject=function(a,b,c,d){var e=CreateObject2(a,b,c,d);return Room.Obj.push(e),e},
                    CreateObject2=function(a,b,c,d)
                    {return"string"==typeof a&&(a=GetObjectByKey(a)),
                    a=Object.assign({},a),
                    sys.ObjF.Inherit(a),
                    a.X=b,
                    a.Y=c,
                    a.ObjectIndex=++sys.ObjectIndex,
                    a.SetAlart=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                    a.ParentCode=d,
                    a.ImgStep=0.0,
                    a.ImageIndex=0.0,
                    a.IsDeleted=!1,
                    ObjecTarget=a,
                    a.EventCreate(),a},
                    GetMask=function(O)
                    {
                        if(O.Img.Mask_Type==2)return O.Img.Mask[O.ImageIndex];
                        return O.Img.Mask[0];},irandom=function(a)
                        {return Math.round(Math.random()*a)},
                        choose_max=function(a){for(var b=1,c=a.length,d=a[0];b<c;b++)a[b]>d&&(d=a[b]);
                            return d},
                            choose_min=function(a)
                            {for(var b=1,c=a.length,d=a[0];b<c;b++)a[b]<d&&(d=a[b]);
                                return d};
                                const Draw={G(a){if("string"==typeof a)
                                {var b=FindImageByKey(a);
                                    return-1==b?null:Images[b]}
                                    return a},GetFlip(m,m1,fh,fv)
                                    {var c=document.createElement("canvas"),
                                t=c.getContext("2d");
                                t.scale(fh?-1:1,fv?-1:1);
                                t.drawImage(m1,fh?m.Width*-1:0,fv?m.Height*-1:0,m.Width,m.Height);
                                return c;},
                                Image(m,i,x,y)
                                {m=this.G(m),
                                    null!=m&&ctx.drawImage(m.M[i%m.Images_number],x-m.OriginX,y-m.OriginY)},
                                    Texture(m,w,h,x,y)
                                    {var c=document.createElement("canvas"),
                                    t=c.getContext("2d");
                                    c.width=w;
                                    c.height=h;
                                    t.drawImage(m,0,0,w,h,x,y,w,h);
                                    t.drawImage(m,0,0,w,h,x-w,y,w,h);
                                    t.drawImage(m,0,0,w,h,x,y-h,w,h);
                                    t.drawImage(m,0,0,w,h,x-w,y-h,w,h);
                                    return c;},
                                    Square(x,y,w,h)
                                    {ctx.fillRect(x,y,w,h);},
                                    SetTextStyle()
                                    {ctx.fillStyle=this.Color;
                                        ctx.font=this.FontSize+" "+this.Font;
                                        ctx.textAlign=this.TextAlign;ctx.direction=this.Direction;
                                        ctx.textBaseline=this.TextBaseline;},
                                        ResetTextStyle()
                                        {this.Color="Black";
                                        this.Font="serif";
                                        this.FontSize="20px";
                                        this.TextAlign="start";
                                        this.Direction="ltr";
                                        this.TextBaseline="top";
                                        this.SetTextStyle();},
                                        SetColor(a)
                                        {this.Color=ctx.fillStyle=a;},
                                        Text(X,Y,T,M)
                                        {ctx.fillStyle=this.Color;
                                            if(M!=null)ctx.fillText(T,X,Y,M);
                                            else ctx.fillText(T,X,Y);}};
                                            const Mouse={IsOn:false,
                                                X:0,
                                                Y:0,
                                                Left:-1,
                                                Right:-1,
                                                Middle:-1,
                                                PageX:0,
                                                PageY:0,
                                                touches:0,
                                                MoveEvent:null,
                                                ClickEvent:null,
                                                TouchEvent:null,
                                                WheelY:0,
                                                MouseMove(e,m)
                                                {this.MoveEvent=e;
                                                    var s=sys.canvasDraw.getBoundingClientRect(),
                                                    mx=e.clientX,
                                                    my=e.clientY,X,Y;
                                                    if(m){
                                                        this.touches=e.touches.length;
                                                        if(e.type=="touchstart"||e.type=="touchend")
                                                        {mx=e.changedTouches[0].pageX;
                                                            my=e.changedTouches[0].pageY;
                                                        }
                                                            else if(e.type=="touchmove")
                                                            {mx=e.targetTouches[0].pageX;
                                                                my=e.targetTouches[0].pageY;}
                                                                mx-=window.pageXOffset;my-=window.pageYOffset;}
                                                                if(!sys.IsFullscreen())
                                                                {X=Math.floor((mx-s.left)*Room.CanvasWidth/s.width);
                                                                    Y=Math.floor((my-s.top)*Room.CanvasHeight/s.height);}
                                                                    else{var w=s.width/Room.CanvasWidth,
                                                                        h=s.height/Room.CanvasHeight;
                                                                        if(h>w)
                                                                        {X=Math.floor(Room.CanvasWidth/s.width*mx);
                                                                            Y=Math.floor((my-(s.height-(Room.CanvasHeight*w))/2)/w);
                                                                        }
                                                                        else{X=Math.floor((mx-(s.width-(Room.CanvasWidth*h))/2)/h);
                                                                            Y=Math.floor(Room.CanvasHeight/s.height*my);
                                                                        }
                                                                        }
                                                                            if(X!=null&&Y!=null)
                                                                            {this.X=X;
                                                                                this.Y=Y;
                                                                            }
                                                                            this.PageX=Math.floor(mx);
                                                                            this.PageY=Math.floor(my);
                                                                        },
                                                                        Down(k)
                                                                        {return this[k]==1;},
                                                                        Up(k){return this[k]==0;},
                                                                        Press(k){return this[k]>0;},
                                                                        funcKeyPress(){
                                                                            if(this.Left>0)
                                                                            this.Left=2;else 
                                                                            this.Left=-1;
                                                                            if(this.Right>0)
                                                                            this.Right=2;
                                                                            else this.Right=-1;
                                                                            this.Middle=-1;
                                                                            this.MoveEvent=this.ClickEvent=this.TouchEvent=null;
                                                                            this.WheelY=0;
                                                                        },Reset()
                                                                        {this.Left=this.Right=-1;
                                                                            this.funcKeyPress();
                                                                        },
                                                                        MouseClick(e)
                                                                        {this.ClickEvent=e;
                                                                            var s="Left";
                                                                            switch(e.which)
                                                                            {case 1:s="Left";
                                                                            break;
                                                                            case 2:s="Middle";
                                                                            break;
                                                                            case 3:s="Right";
                                                                            break;
                                                                            default:return;}
                                                                            if(s=="Middle")this[s]=1;
                                                                            else this[s]=e.type=='mousedown'?1:0;},
                                                                            MouseWheel(e)
                                                                            {this.WheelY=e.deltaY;},
                                                                            TouchClick(){
                                                                                this.TouchEvent=event;if(event.type=="touchstart")
                                                                                this["Left"]=1;},Square(a,b,c,d)
                                                                                {
                                                                                    return this.X>=a&&this.X<c&&this.Y>=b&&this.Y<d},
                                                                                    Square2(a,b,c,d)
                                                                                    {return this.X>=a&&this.X<a+c&&this.Y>=b&&this.Y<b+d}};
                                                                                    let sys={LoadRoomObject()
                                                                                        {var A=new Array(),i=0,o=Room.Obj,l=o.length;for(;i<l;i++)
                                                                                            {A[i]=CreateObject2(o[i].Key,o[i].X,o[i].Y);
                        if(this.RS)return;}
                        return A;},ObjF:{Inherit(O)
                        {for(var a=this.a,i=2,l=a.length;i<l;i++)O[a[i]]=this[a[i]]},a:[]},
                        canvas:document.createElement("canvas"),canvasDraw:document.
                        createElement("canvas"),
                        RS:false,
                        IsStarting:false,
                        PElem:null,
                        IsGameReady:-1,
                        InGameStart:true,
                        MScolling:false,
                        DataFolder:'Img',
                        clear:function(){ctx.clearRect(0,0,this.canvas.width,this.canvas.height);},
                        clearDraw:function(){if(""!=Room.BackColor){ctxD.fillStyle=Room.BackColor;ctxD.fillRect(0,0, this.canvasDraw.width,this.canvasDraw.height);}
                            else ctxD.clearRect(0,0,this.canvasDraw.width,this.canvasDraw.height);},
                            RoomReset(){this.RoomChange(Room.Key);},RoomChange(vRI,C){if(C==null)C={KB:false,Snd:false};Mouse.Reset();
                            if(!C.Snd)var R=null;
                            if(typeof vRI=="number"){R=Rooms[vRI];} else if(typeof vRI=="string"){R=FindRoomByKey(vRI);
                                if(R==-1)return;R=Rooms[R];}else if(typeof vRI=="object"&&FindRoomByKey(vRI.Key)!=-1){R=vRI;}else return;
                                Room=Object.assign({},R);this.ObjectIndex=0;
                                this.canvas.width=Room.Width;
                                this.canvas.height=Room.Height;
                                if(this.canvasDraw.width!=Room.CanvasWidth)
                                this.canvasDraw.width=Room.CanvasWidth;
                                if(this.canvasDraw.height!=Room.CanvasHeight)
                                this.canvasDraw.height=Room.CanvasHeight;
                                Draw.ResetTextStyle();
                                var vObj=this.LoadRoomObject();
                    if(vObj==null)return;
                    Room.Obj=vObj;
                    ctx.resetTransform();
                    ctx.imageSmoothingEnabled=ctx_S;
                    ctxD.imageSmoothingEnabled=ctxD_S;
                    ctx.globalAlpha=1;this.RS=true;},
                    EndGame(){
                        this.RS=true;
                        this.IsStarting=false;
                        this.IsGameReady=-1;
                        this.PElem.innerHTML="";},
                        StartGame(vElemMyGame){
                            this.PElem=vElemMyGame;
                            this.RS=false;
                            this.InGameStart=true;
                            if(this.IsGameReady==-1)
                            {
                                this.LoadAll();
                                this.IsGameReady=0;
                                return}else if(this.IsGameReady==0){return;}
                                if(this.IsStarting)
                                {
                                    this.RoomChange(First_Room);
                                    return;}Mouse.funcKeyPress();
                                    var R=GetRoomByKey(First_Room);
                                    Room=Object.assign({},R);
                                    this.ObjectIndex=0;
                                    this.IsMobile=(typeof window.orientation!=='undefined'?true:false);
                                    this.canvas.width=Room.Width;
                                    this.canvasDraw.width=Room.CanvasWidth;
                                    this.canvas.height=Room.Height;
                                    this.canvasDraw.height=Room.CanvasHeight;
                                    this.canvasDraw.oncontextmenu=function(e){e.preventDefault();};
                                    this.canvasDraw.addEventListener("mousemove",function(){Mouse.MouseMove(event,false)},!1);
                                    this.canvasDraw.addEventListener("mouseout",function(){Mouse.IsOn=!1;},!1);
                                    this.canvasDraw.addEventListener("mouseover",function(){Mouse.IsOn=!0},!1);
                                    this.canvasDraw.addEventListener("mousedown",function(){Mouse.MouseClick(event)},!1);
                                    this.canvasDraw.addEventListener("mouseup",function(){Mouse.MouseClick(event)},!1);
                                    this.canvasDraw.addEventListener("touchmove",function(){Mouse.IsOn=true;Mouse.MouseMove(event,true);
                                        if(!sys.MScolling)event.preventDefault();},!1);
                                        this.canvasDraw.addEventListener("touchstart",function(){Mouse.MouseMove(event,true);
                                            Mouse.TouchClick();if(!sys.MScolling)event.preventDefault();},!1);
                                            this.canvasDraw.addEventListener("touchend",function()
                                            {if(Mouse.Left!=0&&Mouse.Left!=1)
                                                {Mouse.Left=0;Mouse.touches=event.touches.length;}
                                                event.preventDefault();},!1);
                                                this.canvasDraw.addEventListener("touchcancel",function(event){Mouse.AddMEvent('touch cancel');event.preventDefault()});
                                                this.canvasDraw.addEventListener("wheel",function(){Mouse.MouseWheel(event)},!1);
                                                this.canvasDraw.tabIndex=1;
                                                ctx=this.canvas.getContext("2d");
                                                ctxD=this.canvasDraw.getContext("2d");
                                                this.canvas.id="_MyGame";
                                                ctx.imageSmoothingEnabled=ctx_S;ctxD.imageSmoothingEnabled=ctxD_S;vElemMyGame.innerHTML="";
                                                vElemMyGame.appendChild(this.canvasDraw);
                                                var vObj=this.LoadRoomObject();
                                                if(vObj==null)return;
                                                Room.Obj=vObj;
                                                Draw.ResetTextStyle();
                                                this.IsStarting=true;
                                                this.UpdateGameArea1();
                                                ctx.resetTransform();
                                                ctx.globalAlpha=1;},
                                                LoadAll(){var l=setInterval(function(){var b=true,i,j;
                                                    for(i=0;i<Images.length;i++){if(Images[i].MaskOnly)continue;
                                                        for(j=0;j<Images[i].M.length;j++)
                                                        {if(!(Images[i].M[j].complete&&Images[i].M[j].naturalHeight!==0)){b=false;break}}
                                                        if(!b)break;}clearInterval(l);
                                                        if(b){sys.IsGameReady=1;
                                                            sys.StartGame(sys.PElem);
                                                            return;}sys.LoadAll();},100);},
                                                            UpdateGameArea1(){if(this.IsStarting)
                                                                var a=setInterval(function(){sys.UpdateGameArea(sys);
                                                                    clearInterval(a);sys.UpdateGameArea1();},Room.Speed);},
                                                                    UpdateGameArea(s){s.clear();s.RS=false;
        var vImg,i,j,T,O=Room.Obj,lenO=O.length,lenT=0;
        var vD=[];for(i=0;i<lenO;i++){vD.push({vI:i,Depth:O[i].Depth});
    }vD.sort(function(a,b){return b.Depth-a.Depth});
    for(i=0,lenT=vD.length;i<lenT;i++){var o=O[vD[i].vI];if(o.IsDeleted||!o.Visible)continue;ObjecTarget=o;o.EventDraw();
        if(s.RS)return;
        if(o.IsDeleted)continue;
        if(o.Img.Images_number>0&&o.ImageSpeed>0){o.ImgStep=(o.ImgStep+1.0*o.ImageSpeed)%o.Img.Images_number;
            o.ImageIndex=Math.floor(o.ImgStep);
        }
    }s.clearDraw();ctxD.drawImage(s.canvas,0,0,s.canvas.width,s.canvas.height);
    for(i=0;i<O.length;)O[i].IsDeleted?O.splice(i,1):i++;Mouse.funcKeyPress();
    vDrawFirst=O=lenO=vImg=O=null;s.InGameStart=false;},
    openFullscreen(){if(allowFS==3)return;
        var a=this.canvasDraw;a.requestFullscreen?a.requestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen?a.webkitRequestFullscreen():a.msRequestFullscreen&&a.msRequestFullscreen();},
        closeFullscreen(){
            var a=document;a.exitFullscreen?a.exitFullscreen():a.mozCancelFullScreen?a.mozCancelFullScreen():a.webkitExitFullscreen?a.webkitExitFullscreen():a.msExitFullscreen&&a.msExitFullscreen();},
            IsFullscreen(){if(sys.IsMobile)return document.webkitCurrentFullScreenElement!=null;
                return window.fullScreen||window.innerWidth==screen.width&&window.innerHeight==screen.height;}};sys.ObjF.a=Object.getOwnPropertyNames(sys.ObjF);var _Game={Start(a){sys.StartGame(a);},Stop(){sys.StopGame();},
                Fullscreen(){sys.openFullscreen();}};let ctx_S=true,First_Room='Room1',ctxD_S=true,allowFS=1,Img1 = new BuildImage("Img1",30,30,6,0,0,0,false,false),
Object1 = new BuildObject("Object1",true,0,1,t.Img,function()
{G.Start();
GF.Start();
},function(){var T         = G.T,i,j,len,inx,x=10,y=10,w=480+200,A,n,bb = 0,bg = 0,cnt = [0,0,0,0,0,0];
ctx.fillStyle = "white"; Draw.Square(0,0,w-40,690);
for(i=0,A=GF.All; i < 200; i++){
    if(A[i].on){
        if(A[i].time > 0){
            ctx.globalAlpha = A[i].time > 20?0:(20-A[i].time)/20;
            A[i].time--;
        }
        else{ ctx.globalAlpha = 1; cnt[A[i].i]++;}
        Draw.Image(Img1,A[i].i,x+A[i].x,y+A[i].y);
    }
    else{
        if(A[i].time > 0){
            ctx.globalAlpha = A[i].time <= 20?(A[i].time)/20:1;
            A[i].time--;
            cnt[A[i].i]++;
        }
        else ctx.globalAlpha = 0;
        Draw.Image(Img1,A[i].i,x+A[i].x,y+A[i].y);
    }
}

ctx.globalAlpha = 1;
G.DrawSlide(w,50,G.pollution,"pollution",1);
G.DrawSlide(w,110,G.human,"human",2);
G.DrawSlide(w,170,G.food,"food",3);
G.DrawSlide(w,230,G.buildings,"buildings",4);
Draw.SetColor(G.color[0]);
Draw.Text(w,270,"Birds: ( "+G.bird+" / "+(cnt[0]+cnt[1])+" )");
Draw.Text(w,270+25*1,"Brown: ( "+G.bird1+" / "+(cnt[0])+" )");
Draw.Text(w,270+25*2,"Gray: ( "+G.bird2+" / "+(cnt[1])+" )");
Draw.SetColor(G.color[1]);Draw.Text(w,330+25*1,"pollution: ( "+G.pollution+" / "+(cnt[2])+" )");
Draw.SetColor(G.color[2]);Draw.Text(w,330+25*2,"human: ( "+G.human+" / "+(cnt[3])+" )");
Draw.SetColor(G.color[3]);Draw.Text(w,330+25*3,"food: ( "+G.food+" / "+(cnt[5])+" )");
Draw.SetColor(G.color[4]);Draw.Text(w,330+25*4,"buildings: ( "+G.buildings+" / "+(cnt[4])+" )");

ctx.lineWidth   = 2;
ctx.fillStyle   = "white"; ctx.fillRect(w-30-5,500-5,190,110);
ctx.strokeStyle = "#555"; ctx.strokeRect(w-30-5,500-5,190,110);

ctx.strokeStyle = G.color[j];
ctx.beginPath();
for(i=0; i < 10; i++){
    n = G.T2[i][0];
    ctx.lineTo(w-30+i*20,600-n);
}
ctx.stroke();
Draw.Image(Img1,G.Num2[0],w+150,600-n-15);
for(j=1; j < 5; j++){
    ctx.strokeStyle = G.color[j];
    ctx.beginPath();
    for(i=0; i < 10; i++){
        n = G.T2[i][j]*4;
        ctx.lineTo(w-30+i*20,600-n);
    }
    ctx.stroke();
    Draw.Image(Img1,G.Num2[j],w+160+j*10,600-n-15);
}
if(G.GTime > 20) G.GTime--;
if(Mouse.Up("Left") || (!sys.IsMobile && !Mouse.IsOn)) G.mlf = "";
//G.birds = 100; G.pollution = G.human = G.food = G.buildings = 0;
},''),Room1 = new BuildRoom("Room1",32,32,910,700,30,910,700,'#E8E9EC',[{Key:Object1,X:0,Y:0}]),Images=[Img1],Objects=[Object1],Rooms=[Room1];var G = { bird:100,bird1:100,bird2:0,pollution:0,human:0,food:0,buildings:0,mlf:"",GTime:20,GTime2:20
    ,Num:{pollution:2,human:3,food:5,buildings:4},Num2:[0,2,3,5,4],color:["black","red","blue","green","purple"]
    ,Start(){
        var T = [],time = [],T2 = [],i,j;
        for(i=0; i < 10; i++){
            T[i] = [];time[i] = [];
            for(j=0; j < 10; j++){
                T[i][j] = 0; time[i][j] = 0;
            }
            T2[i] = [100,0,0,0,0];
        }
        this.T         = T; this.time = time; this.T2 = T2; this.GTime = 20; this.GTime2 = 20;
        this.bird      = this.bird1 = 100; this.bird2 = 0;
        this.pollution = this.human = this.food = this.buildings = 0;
    }
    ,DrawSlide(x,y,n,txt,i){
        if((Mouse.Square2(x,y,156,30) && Mouse.Down("Left")) || this.mlf == txt){
            n = Math.floor((Mouse.X-x)/6);
            if(n > 25) n = 25; if(n < 0) n = 0;
            var n1 = this[txt] - n;
            this[txt] = n;
            this.mlf = txt;
            this.ReDraw(n1,txt);
        }
        Draw.Image(Img1,this.Num[txt],x-30,y);
        ctx.fillStyle = "black"; Draw.Square(x,y+2,156,26); Draw.Text(x+160,y+4,n);
        ctx.fillStyle = "red"; Draw.Square(x+n*6,y,6,30); ctx.fillStyle = this.color[i]; ctx.fillText(txt,x,y-21);// Draw.Text(x,y-21,txt);
    }
    ,ReDraw(n,txt){
        var n1 = this.Num[txt],x,y;
        if(n == 0) return;
        else if(n < 0){
            do{
                x = irandom(9); y = irandom(9);
                if(this.T[x][y] <= 1){
                    this.T[x][y] = n1;
                    this.time[x][y] = this.GTime;
                    this.GTime+=3;
                    if(this.GTime > 60) this.GTime = 60;
                    n++;
                }
            }while(n != 0);
        }
        else{
            do{
                x = irandom(9); y = irandom(9);
                if(this.T[x][y] == n1){
                    this.T[x][y] = 0;
                    this.time[x][y] = this.GTime;
                    this.GTime+=3;
                    if(this.GTime > 60) this.GTime = 60;
                    n--;
                }
            }while(n != 0);
        }
        //////////
        var cnt = 0;
        for(i=0; i < 10; i++){
            for(j=0; j < 10; j++){
                if(this.T[i][j] <= 1){ this.T[i][j] = 0; cnt++;}
            }
        }
        this.bird  = cnt;
        cnt        = Math.floor(cnt*(this.pollution/25));
        this.bird2 = cnt; this.bird1 = this.bird-this.bird2;
        while(cnt != 0){
            x = irandom(9); y = irandom(9);
            if(this.T[x][y] == 0){
                this.T[x][y] = 1;
                cnt--;
            }
        }
        this.DrawLines();
        GF.Change(GF.bird,G.bird);
        GF.Change(GF.pollution,G.pollution); 
        GF.Change(GF.human,G.human);
        GF.Change(GF.food,G.food);
        GF.Change(GF.buildings,G.buildings);
        GF.ChangeBird();
    }
    ,DrawLines(){
        this.T2.shift();
        this.T2.push([this.bird,this.pollution,this.human,this.food,this.buildings]);
    }
};

var GF = {
    All:[],bird:[],pollution:[],human:[],food:[],buildings:[]
    ,GetNewXY(obj){
        do{
            obj.x = irandom(600);
            obj.y = irandom(650);
        }while(!this.IsFreeXY(obj));
    }
    ,IsFreeXY(B){
        var ii,len,A = this.All;
        for(ii=0,len=A.length; ii < len; ii++){
            if(B.n == A[ii].n || !A[ii].on) continue;
            var b = B.x, c = 30, d = B.y, e = 30;
            var i = A[ii].x, j = 30, k = A[ii].y, l = 30;
            if (b < i + j && b + c > i && d < k + l && d + e > k) return false;
            //if(B.x >= A.x && B.x < A.x+20 && B.y >= A.y && B.y < A.y+20) return false;
        }
        return true;
    }
    ,Start(){
        this.All = []; this.bird = []; this.pollution = []; this.human = []; this.food = []; this.buildings = [];
        var i,Obj,n=0;
        for(i=0; i < 100; i++){
            Obj = {type:"bird",i:0,n:n++,time:0,on:true};
            this.GetNewXY(Obj);
            this.All.push(Obj);
            this.bird.push(Obj);
        }
        for(i=0; i < 25; i++){
            Obj = {type:"pollution",i:2,n:n++,time:0,on:false};
            this.GetNewXY(Obj);
            this.All.push(Obj);
            this.pollution.push(Obj);
        }
        for(i=0; i < 25; i++){
            Obj = {type:"human",i:3,n:n++,time:0,on:false};
            this.GetNewXY(Obj);
            this.All.push(Obj);
            this.human.push(Obj);
        }
        for(i=0; i < 25; i++){
            Obj = {type:"food",i:5,n:n++,time:0,on:false};
            this.GetNewXY(Obj);
            this.All.push(Obj);
            this.food.push(Obj);
        }
        for(i=0; i < 25; i++){
            Obj = {type:"buildings",i:4,n:n++,time:0,on:false};
            this.GetNewXY(Obj);
            this.All.push(Obj);
            this.buildings.push(Obj);
        }
    }
    ,Change(A,n){
        var i = 0 ,len=A.length,cnt=0,j;
        for(; i < len; i++){
            if(A[i].on) cnt++;
        }
        if(n == cnt) return;
        if(n < cnt){
            for(j = n; j < cnt; j++){
                do{
                    i = irandom(len-1);
                }while(!A[i].on);
                this.SetOf(A[i]);
            }
        }
        else{
            for(j = cnt; j < n; j++){
                do{
                    i = irandom(len-1);
                }while(A[i].on);
                this.SetOn(A[i]);
            }
        }
    }
    ,SetOf(O){
        O.on   = false;
        O.time = G.GTime;
    }
    ,SetOn(O){
        this.GetNewXY(O);
        O.on   = true;
        O.time = G.GTime;
    }
    ,ChangeBird(){
        if(G.bird == 0) return;
        var A = GF.bird,n= G.bird2;
        var i = 0 ,len=A.length,cnt=0,j; 
        for(; i < len; i++){
            if(A[i].on && A[i].i==1) cnt++;
        }
        //alert(n);
        if(n == cnt) return;
        if(n < cnt){
            for(j = n; j < cnt; j++){
                do{
                    i = irandom(len-1);
                }while(!A[i].on || A[i].i == 0);
                A[i].i = 0;
            }
        }
        else{
            for(j = cnt; j < n; j++){
                do{
                    i = irandom(len-1);
                }while(!A[i].on || A[i].i == 1);
                A[i].i = 1;
            }
        }
    }
};
}
