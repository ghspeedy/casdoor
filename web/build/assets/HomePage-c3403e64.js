import{R as u,f as d,w as r,ag as h,j as i,o as S,dq as k,e as x,dr as C,v as w,P as z,i as s,S as A,n as c}from"./index-a4571b31.js";const{Meta:l}=r;class v extends u.Component{constructor(t){super(t),this.state={classes:t}}wrappedAsSilentSigninLink(t){return t.startsWith("http")&&(t+=t.includes("?")?"&silentSignin=1":"?silentSignin=1"),t}renderCardMobile(t,e,n,a,p,g){const o={width:"100vw",textAlign:"center",cursor:"pointer"},y=this.wrappedAsSilentSigninLink(e);return d(r.Grid,{style:o,onClick:()=>h(this,y),children:[i("img",{src:t,alt:"logo",width:"100%",style:{marginBottom:"20px"}}),i(l,{title:n,description:a,style:{justifyContent:"center"}})]})}renderCard(t,e,n,a,p,g){const o=this.wrappedAsSilentSigninLink(e);return i(S,{style:{paddingLeft:"20px",paddingRight:"20px",paddingBottom:"20px",marginBottom:"20px"},span:6,children:d(r,{hoverable:!0,cover:i("img",{alt:"logo",src:t,style:{width:"100%",height:"200px",padding:"20px",objectFit:"scale-down"}}),onClick:()=>h(this,o),style:g?{width:"320px",height:"100%"}:{width:"100%",height:"100%"},children:[i(l,{title:n,description:a}),i("br",{}),i("br",{}),i(l,{title:"",description:k(p)})]})})}render(){return x()?this.renderCardMobile(this.props.logo,this.props.link,this.props.title,this.props.desc,this.props.time,this.props.isSingle):this.renderCard(this.props.logo,this.props.link,this.props.title,this.props.desc,this.props.time,this.props.isSingle)}}const m=C(v);class b extends u.Component{constructor(t){super(t),this.state={classes:t,applications:null}}UNSAFE_componentWillMount(){this.getApplicationsByOrganization(this.props.account.owner)}getApplicationsByOrganization(t){w("admin",t).then(e=>{this.setState({applications:e.msg===void 0?e:[]})})}getItems(){let t=[];if(z(this.props.account)){t=[{link:"/organizations",name:s.t("general:Organizations"),organizer:s.t("general:User containers")},{link:"/users",name:s.t("general:Users"),organizer:s.t("general:Users under all organizations")},{link:"/providers",name:s.t("general:Providers"),organizer:s.t("general:OAuth providers")},{link:"/applications",name:s.t("general:Applications"),organizer:s.t("general:Applications that require authentication")}];for(let e=0;e<t.length;e++){let n=t[e].link;n==="/account"&&(n="/users"),t[e].logo=`${A}/img${n}.png`,t[e].createdTime=""}}else this.state.applications.forEach(e=>{let n=e.homepageUrl;n==="<custom-url>"&&(n=this.props.account.homepage),t.push({link:n,name:e.displayName,organizer:e.description,logo:e.logo,createdTime:""})});return t}renderCards(){if(this.state.applications===null)return null;const t=this.getItems();return x()?i(r,{bodyStyle:{padding:0},children:t.map(e=>i(m,{logo:e.logo,link:e.link,title:e.name,desc:e.organizer,isSingle:t.length===1},e.link))}):i("div",{style:{marginRight:"15px",marginLeft:"15px"},children:i(c,{style:{marginLeft:"-20px",marginRight:"-20px",marginTop:"20px"},gutter:24,children:t.map(e=>i(m,{logo:e.logo,link:e.link,title:e.name,desc:e.organizer,time:e.createdTime,isSingle:t.length===1},e.name))})})}render(){return i("div",{children:i(c,{style:{width:"100%"},children:i(S,{span:24,style:{display:"flex",justifyContent:"center"},children:this.renderCards()})})})}}export{b as default};