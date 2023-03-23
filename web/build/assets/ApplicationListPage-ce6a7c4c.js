var $=Object.defineProperty;var z=(l,s,e)=>s in l?$(l,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[s]=e;var y=(l,s,e)=>(z(l,typeof s!="symbol"?s+"":s,e),e);import{g as k,S as w,ad as A,s as d,i as t,ae as C,b as N,j as a,L as h,c as T,f as g,n as P,o as S,e as I,B as u,P as L,af as q,v as F,k as B,T as R,ag as U}from"./index-a4571b31.js";import{h as D}from"./moment-fbc5633a.js";import{B as O}from"./BaseListPage-cf3b6a63.js";import{P as E}from"./PopconfirmModal-c2d7912b.js";import{T as M}from"./Table-4974f722.js";import{L as b}from"./index-ee984c89.js";import{E as _}from"./EditOutlined-5f57c71a.js";import"./index-3220aa08.js";class Z extends O{constructor(e){super(e);y(this,"fetch",(e={})=>{const r=e.searchedColumn,p=e.searchText,i=e.sortField,n=e.sortOrder;this.setState({loading:!0}),(L(this.props.account)?q("admin",e.pagination.current,e.pagination.pageSize,r,p,i,n):F("admin",this.state.organizationName,e.pagination.current,e.pagination.pageSize,r,p,i,n)).then(o=>{o.status==="ok"?this.setState({loading:!1,data:o.data,pagination:{...e.pagination,total:o.data2},searchText:e.searchText,searchedColumn:e.searchedColumn}):B(o)&&this.setState({loading:!1,isAuthorized:!1})})})}componentDidMount(){this.setState({organizationName:this.props.account.owner})}newApplication(){const e=k();return{owner:"admin",name:`application_${e}`,organization:this.state.organizationName,createdTime:D().format(),displayName:`New Application - ${e}`,logo:`${w}/img/casdoor-logo_1185x256.png`,enablePassword:!0,enableSignUp:!0,enableSigninSession:!1,enableCodeSignin:!1,enableSamlCompress:!1,providers:[{name:"provider_captcha_default",canSignUp:!1,canSignIn:!1,canUnlink:!1,prompted:!1,alertType:"None"}],signupItems:[{name:"ID",visible:!1,required:!0,rule:"Random"},{name:"Username",visible:!0,required:!0,rule:"None"},{name:"Display name",visible:!0,required:!0,rule:"None"},{name:"Password",visible:!0,required:!0,rule:"None"},{name:"Confirm password",visible:!0,required:!0,rule:"None"},{name:"Email",visible:!0,required:!0,rule:"Normal"},{name:"Phone",visible:!0,required:!0,rule:"None"},{name:"Agreement",visible:!0,required:!0,rule:"None"}],cert:"cert-built-in",redirectUris:["http://localhost:9000/callback"],tokenFormat:"JWT",expireInHours:24*7,formOffset:2}}addApplication(){const e=this.newApplication();A(e).then(r=>{r.status==="ok"?(this.props.history.push({pathname:`/applications/${e.organization}/${e.name}`,mode:"add"}),d("success",t.t("general:Successfully added"))):d("error",`${t.t("general:Failed to add")}: ${r.msg}`)}).catch(r=>{d("error",`${t.t("general:Failed to connect to server")}: ${r}`)})}deleteApplication(e){C(this.state.data[e]).then(r=>{r.status==="ok"?(d("success",t.t("general:Successfully deleted")),this.setState({data:N(this.state.data,e),pagination:{total:this.state.pagination.total-1}})):d("error",`${t.t("general:Failed to delete")}: ${r.msg}`)}).catch(r=>{d("error",`${t.t("general:Failed to connect to server")}: ${r}`)})}renderTable(e){const r=[{title:t.t("general:Name"),dataIndex:"name",key:"name",width:"150px",fixed:"left",sorter:!0,...this.getColumnSearchProps("name"),render:(i,n,o)=>a(h,{to:`/applications/${n.organization}/${i}`,children:i})},{title:t.t("general:Created time"),dataIndex:"createdTime",key:"createdTime",width:"160px",sorter:!0,render:(i,n,o)=>T(i)},{title:t.t("general:Display name"),dataIndex:"displayName",key:"displayName",sorter:!0,...this.getColumnSearchProps("displayName")},{title:"Logo",dataIndex:"logo",key:"logo",width:"200px",render:(i,n,o)=>a("a",{target:"_blank",rel:"noreferrer",href:i,children:a("img",{src:i,alt:i,width:150})})},{title:t.t("general:Organization"),dataIndex:"organization",key:"organization",width:"150px",sorter:!0,...this.getColumnSearchProps("organization"),render:(i,n,o)=>a(h,{to:`/organizations/${i}`,children:i})},{title:t.t("general:Providers"),dataIndex:"providers",key:"providers",...this.getColumnSearchProps("providers"),render:(i,n,o)=>{const c=i;if(c.length===0)return`(${t.t("general:empty")})`;const f=Math.floor((c.length+1)/2),x=v=>a(b,{size:"small",locale:{emptyText:" "},dataSource:v,renderItem:(m,j)=>a(b.Item,{children:g("div",{style:{display:"inline"},children:[a(R,{placement:"topLeft",title:"Edit",children:a(u,{style:{marginRight:"5px"},icon:a(_,{}),size:"small",onClick:()=>U(this,`/providers/${n.organization}/${m.name}`)})}),a(h,{to:`/providers/${n.organization}/${m.name}`,children:m.name})]})})});return a("div",{children:g(P,{children:[a(S,{span:12,children:x(c.slice(0,f))}),a(S,{span:12,children:x(c.slice(f))})]})})}},{title:t.t("general:Action"),dataIndex:"",key:"op",width:"170px",fixed:I()?"false":"right",render:(i,n,o)=>g("div",{children:[a(u,{style:{marginTop:"10px",marginBottom:"10px",marginRight:"10px"},type:"primary",onClick:()=>this.props.history.push(`/applications/${n.organization}/${n.name}`),children:t.t("general:Edit")}),a(E,{title:t.t("general:Sure to delete")+`: ${n.name} ?`,onConfirm:()=>this.deleteApplication(o),disabled:n.name==="app-built-in"})]})}],p={total:this.state.pagination.total,showQuickJumper:!0,showSizeChanger:!0,showTotal:()=>t.t("general:{total} in total").replace("{total}",this.state.pagination.total)};return a("div",{children:a(M,{scroll:{x:"max-content"},columns:r,dataSource:e,rowKey:"name",size:"middle",bordered:!0,pagination:p,title:()=>g("div",{children:[t.t("general:Applications"),"    ",a(u,{type:"primary",size:"small",onClick:this.addApplication.bind(this),children:t.t("general:Add")})]}),loading:this.state.loading,onChange:this.handleTableChange})})}}export{Z as default};