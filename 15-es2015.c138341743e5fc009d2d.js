(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"K4G+":function(e,t,r){"use strict";r.r(t),r.d(t,"InternalModule",function(){return $e});var i=r("QibW"),o=r("ofXK"),a=r("tyNb"),n=r("3Pt+"),c=r("WsYS"),l=r("93Pz"),s=r("1jcm"),b=r("FKr1"),d=r("0IaG"),u=r("NFeN"),h=r("bSwM"),f=r("iadO"),m=r("1yaQ"),p=r("qFsG"),g=r("kmnG"),U=r("/1cH"),v=r("bTqV"),C=r("wZkO"),P=r("Qu3c"),V=r("d3UM"),w=r("Wp6s"),S=r("STbY"),G=r("bv9b"),x=r("Xa2L"),M=r("dNgK"),k=r("+0xr"),E=r("MutI"),I=r("XhcP"),A=r("5RNC"),y=r("zkoq"),K=r("jaxi"),N=r("8yBR"),j=r("M9IT"),D=r("A5z7"),O=r("xHqg"),z=r("Dh3D"),B=r("/t3+"),Q=r("2ChS"),L=r("7EHt"),_=r("f0Cb"),F=r("fXoL");let R=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=F.Jb({type:e,selectors:[["kt-internal"]],decls:1,vars:0,template:function(e,t){1&e&&F.Qb(0,"router-outlet")},directives:[a.m],encapsulation:2,changeDetection:0}),e})();var T=r("QJFE"),W=r("JqCM"),$=r("PSD3"),H=r.n($),q=r("+BVi"),J=r("1kSV"),X=r("5eHb"),Z=r("jhN1"),Y=r("ap2d");let ee=(()=>{class e{constructor(e,t){this.api=e,this.router=t}GetPerfiles(){return this.api.get("Perfil",{})}GetFolio(e){return this.api.getById("Perfil",e)}Post(e){return this.api.post("Perfil",e)}Put(e){return this.api.put("Perfil",e)}Delete(e){return this.api.delete("Perfil",e)}}return e.\u0275fac=function(t){return new(t||e)(F.cc(Y.a),F.cc(a.h))},e.\u0275prov=F.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var te=r("ptnc");const re=["matPaginator7"],ie=["sort7"];function oe(e,t){if(1&e){const e=F.Wb();F.Vb(0,"button",31),F.fc("click",function(){return F.zc(e),F.jc().ShowAdd()}),F.Qb(1,"i",32),F.Kc(2," Nuevo "),F.Ub()}}function ae(e,t){1&e&&(F.Vb(0,"mat-header-cell",33),F.Kc(1," N\xfamero"),F.Ub())}function ne(e,t){if(1&e&&(F.Vb(0,"mat-cell"),F.Kc(1),F.Ub()),2&e){const e=t.index;F.Cb(1),F.Mc(" ",e+1," ")}}function ce(e,t){1&e&&(F.Vb(0,"mat-header-cell",33),F.Kc(1," Perf\xedl "),F.Ub())}function le(e,t){if(1&e&&(F.Vb(0,"mat-cell"),F.Kc(1),F.Ub()),2&e){const e=t.$implicit;F.Cb(1),F.Mc(" ",e.NombrePerfil," ")}}function se(e,t){1&e&&(F.Vb(0,"mat-header-cell"),F.Kc(1," Actions "),F.Ub())}function be(e,t){if(1&e){const e=F.Wb();F.Vb(0,"a",36),F.fc("click",function(){F.zc(e);const t=F.jc().$implicit;return F.jc().ShowEdit(t)}),F.Qb(1,"i",37),F.Ub()}}function de(e,t){if(1&e){const e=F.Wb();F.Vb(0,"a",38),F.fc("click",function(){F.zc(e);const t=F.jc().$implicit;return F.jc().Eliminar(t)}),F.Qb(1,"i",39),F.Ub()}}function ue(e,t){if(1&e&&(F.Vb(0,"mat-cell"),F.Ic(1,be,2,0,"a",34),F.Kc(2," \xa0 \xa0 "),F.Ic(3,de,2,0,"a",35),F.Kc(4," \xa0 "),F.Ub()),2&e){const e=F.jc();F.Cb(1),F.pc("ngIf",e.Screen.Put),F.Cb(2),F.pc("ngIf",e.Screen.Delete)}}function he(e,t){1&e&&F.Qb(0,"mat-header-row")}function fe(e,t){1&e&&F.Qb(0,"mat-row")}function me(e,t){if(1&e){const e=F.Wb();F.Vb(0,"div",6),F.Qb(1,"div",40),F.Vb(2,"div",41),F.Vb(3,"div",42),F.Vb(4,"div",1),F.Vb(5,"h3",43),F.Kc(6," Nuevo Perfil "),F.Ub(),F.Ub(),F.Vb(7,"div",5),F.Vb(8,"div",6),F.Vb(9,"div",44),F.Vb(10,"label"),F.Kc(11,"Perf\xedl"),F.Ub(),F.Vb(12,"input",45),F.fc("ngModelChange",function(t){return F.zc(e),F.jc().General.Perfil.NombrePerfil=t}),F.Ub(),F.Ub(),F.Vb(13,"div",46),F.Vb(14,"label"),F.Kc(15,"Estatus"),F.Ub(),F.Vb(16,"label",47),F.Qb(17,"i",48),F.Kc(18," Activo"),F.Ub(),F.Ub(),F.Ub(),F.Ub(),F.Vb(19,"div",49),F.Vb(20,"div",7),F.Vb(21,"button",50),F.fc("click",function(){return F.zc(e),F.jc().Guardar()}),F.Qb(22,"i",51),F.Kc(23," Guardar"),F.Ub(),F.Vb(24,"button",52),F.fc("click",function(){return F.zc(e),F.jc().Cancelar()}),F.Qb(25,"i",53),F.Kc(26," Cancelar"),F.Ub(),F.Ub(),F.Ub(),F.Ub(),F.Ub(),F.Ub()}if(2&e){const e=F.jc();F.Cb(12),F.pc("ngModel",e.General.Perfil.NombrePerfil)}}function pe(e,t){if(1&e){const e=F.Wb();F.Vb(0,"div",6),F.Qb(1,"div",40),F.Vb(2,"div",41),F.Vb(3,"div",42),F.Vb(4,"div",1),F.Vb(5,"h3",43),F.Kc(6," Editar Perf\xedl "),F.Ub(),F.Ub(),F.Vb(7,"div",5),F.Vb(8,"div",6),F.Vb(9,"div",44),F.Vb(10,"label"),F.Kc(11,"Perf\xedl"),F.Ub(),F.Vb(12,"input",45),F.fc("ngModelChange",function(t){return F.zc(e),F.jc().General.Perfil.NombrePerfil=t}),F.Ub(),F.Ub(),F.Vb(13,"div",46),F.Vb(14,"label"),F.Kc(15,"Estatus"),F.Ub(),F.Vb(16,"label",47),F.Qb(17,"i",48),F.Kc(18," Activo"),F.Ub(),F.Ub(),F.Ub(),F.Ub(),F.Vb(19,"div",49),F.Vb(20,"div",44),F.Vb(21,"button",50),F.fc("click",function(){return F.zc(e),F.jc().GuardarEditar()}),F.Qb(22,"i",51),F.Kc(23," Guardar"),F.Ub(),F.Vb(24,"button",52),F.fc("click",function(){return F.zc(e),F.jc().Cancelar()}),F.Qb(25,"i",53),F.Kc(26," Cancelar"),F.Ub(),F.Ub(),F.Ub(),F.Ub(),F.Ub(),F.Ub()}if(2&e){const e=F.jc();F.Cb(12),F.pc("ngModel",e.General.Perfil.NombrePerfil)}}const ge=function(){return[25,50,100]};let Ue=(()=>{class e{constructor(e,t,r,i,o,a,n,c,l){this.snackBar=e,this.AuthService=t,this.modalService=r,this.toastr=i,this.spinnerService=o,this.router=a,this.sanitizer=n,this.PerfilService=c,this.ScreenActionsService=l,this.Page={},this.Screen={},this.General={},this.displayedColumns7=["No","NombrePerfil","actions"],this.Page.ShowAdd=!1,this.Page.ShowEdit=!1,this.Page.ShowList=!0,this.Page.Controller=this.router.routerState.snapshot.url.toString().substr(this.router.routerState.snapshot.url.lastIndexOf("/")+1,this.router.routerState.snapshot.url.toString().length-1),this.General.Perfil={}}ngOnInit(){this.ScreenActionsService.Promise_GetById(this.Page.Controller).then(e=>{this.Screen=e,this.CargaDatos()},e=>{this.handleError(e)})}CargaDatos(){this.dataSourceFolios=new k.k([]),this.spinnerService.show(),this.PerfilService.GetPerfiles().subscribe(e=>{this.dataSourceFolios=new k.k(e),this.dataSourceFolios.paginator=this.paginator7,this.dataSourceFolios.sort=this.sort7,this.spinnerService.hide()},e=>{this.handleError(e)})}applyFilter7(e){this.dataSourceFolios.filter=e.trim().toLowerCase(),this.dataSourceFolios.paginator&&this.dataSourceFolios.paginator.firstPage()}ShowAdd(){this.General.Perfil={},this.Page.ShowAdd=!0,this.Page.ShowList=!1,this.Page.ShowEdit=!1}Cancelar(){this.Page.ShowList=!0,this.Page.ShowAdd=!1,this.Page.ShowEdit=!1}ShowEdit(e){this.General.Perfil.IdPerfil=e.IdPerfil,this.General.Perfil.NombrePerfil=e.NombrePerfil,this.Page.ShowEdit=!0,this.Page.ShowAdd=!1,this.Page.ShowList=!1}Guardar(){this.General.Perfil.NombrePerfil?this.General.Perfil.NombrePerfil.length<5?this.toastr.error("La informacion proporcionada no es v\xe1lida, favor de revisar"):this.PerfilService.Post(this.General.Perfil).subscribe(e=>{this.toastr.success("La informaci\xf3n se guard\xf3 correctamente"),this.CargaDatos(),this.Cancelar()},e=>{this.handleError(e)}):this.toastr.error("El perfil no puede estar vac\xedo, favor de revisar")}GuardarEditar(){this.General.Perfil.IdPerfil&&0!=this.General.Perfil.IdPerfil?this.General.Perfil.NombrePerfil?this.General.Perfil.NombrePerfil.length<5?this.toastr.error("La informacion proporcionada no es v\xe1lida, favor de revisar"):this.PerfilService.Put(this.General.Perfil).subscribe(e=>{this.toastr.success("La informaci\xf3n se actualiz\xf3 correctamente"),this.CargaDatos(),this.Cancelar()},e=>{this.handleError(e)}):this.toastr.error("El perfil no puede estar vac\xedo, favor de revisar"):this.toastr.error("ocurrio un error al seleccionar el  perf\xedl")}Eliminar(e){H.a.fire({title:"Confirmaci\xf3n",text:"Eliminar la informaci\xf3n del perfil: "+e.NombrePerfil,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Eliminar",cancelButtonText:"Cancelar"}).then(t=>{t.value&&this.GuardarEliminar(e.IdPerfil)})}GuardarEliminar(e){this.PerfilService.Delete(e).subscribe(()=>{this.toastr.success("La informaci\xf3n se elimin\xf3 correctamente"),this.Cancelar(),this.CargaDatos()},e=>{this.handleError(e)})}handleError(e){this.AuthService.handleError(e)}openSnackBar(e,t){this.snackBar.open(e,t,{duration:2e3})}}return e.\u0275fac=function(t){return new(t||e)(F.Pb(M.a),F.Pb(q.a),F.Pb(J.y),F.Pb(X.b),F.Pb(W.c),F.Pb(a.h),F.Pb(Z.b),F.Pb(ee),F.Pb(te.a))},e.\u0275cmp=F.Jb({type:e,selectors:[["kt-perfiles"]],viewQuery:function(e,t){if(1&e&&(F.Ec(re,!0),F.Ec(ie,!0)),2&e){let e;F.wc(e=F.gc())&&(t.paginator7=e.first),F.wc(e=F.gc())&&(t.sort7=e.first)}},decls:41,vars:10,consts:[[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"fa","fa-list","icon-md"],[1,"card-body"],[1,"row"],[1,"col-xs-12","col-md-12"],[3,"hidden"],[1,"col-xs-12","col-md-10"],[1,"col-xs-12","col-md-2","text-right"],["type","button","style","color: #7AB800 !important","class","btn btn-outline-secondary",3,"click",4,"ngIf"],[1,"example-container"],[1,"col-xs-12","col-md-6",2,"flex","0 0 0% !important"],[1,"example-header"],["matInput","","placeholder","Filter",3,"keyup"],[3,"pageSizeOptions"],["matPaginator7",""],["matSort","",3,"dataSource"],["sort7","matSort"],["matColumnDef","No"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","NombrePerfil"],["matColumnDef","actions"],[4,"matHeaderCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["class","row",4,"ngIf"],["bdColor","rgba(0, 0, 0, 0.8)","size","medium","color","#fff","type","ball-atom",3,"fullScreen"],[2,"color","white"],["type","button",1,"btn","btn-outline-secondary",2,"color","#7AB800 !important",3,"click"],[1,"fas","fa-plus-circle"],["mat-sort-header",""],["href","javascript:;","class","btn btn-xs btn-default btn-text-default btn-hover-primary btn-icon","title","Editar",3,"click",4,"ngIf"],["href","javascript:;","class","btn btn-xs btn-default btn-text-default btn-hover-danger btn-icon","title","Eliminar",3,"click",4,"ngIf"],["href","javascript:;","title","Editar",1,"btn","btn-xs","btn-default","btn-text-default","btn-hover-primary","btn-icon",3,"click"],[1,"fa","fa-edit","icon-nm"],["href","javascript:;","title","Eliminar",1,"btn","btn-xs","btn-default","btn-text-default","btn-hover-danger","btn-icon",3,"click"],[1,"fa","fa-trash-alt","icon-nm"],[1,"col-xs-0","col-md-2"],[1,"col-xs-12","col-md-8"],[1,"card","card-custom",2,"box-shadow","0px 0px"],[1,"h3"],[1,"col-md-5"],["maxlength","50","type","text",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"col-md-2"],[1,"form-control","form-control-sm"],[1,"fa","fa-check"],[1,"card-footer",2,"border-top","0px","padding","0px"],[1,"btn","btn-light","btn-text-success","btn-hover-text-success","font-weight-bold",3,"click"],[1,"fa","fa-save"],[1,"btn","btn-light","btn-text-dark","btn-hover-text-dark","font-weight-bold",2,"margin-left","5px",3,"click"],[1,"fa","fa-times"]],template:function(e,t){1&e&&(F.Vb(0,"div",0),F.Vb(1,"div",1),F.Vb(2,"div",2),F.Vb(3,"h2",3),F.Qb(4,"i",4),F.Kc(5," Administraci\xf3n de Perf\xedles"),F.Ub(),F.Ub(),F.Ub(),F.Vb(6,"div",5),F.Vb(7,"div",6),F.Vb(8,"div",7),F.Vb(9,"div",8),F.Vb(10,"div",6),F.Qb(11,"div",9),F.Vb(12,"div",10),F.Ic(13,oe,3,0,"button",11),F.Ub(),F.Ub(),F.Vb(14,"div",6),F.Vb(15,"div",12),F.Vb(16,"div",13),F.Vb(17,"div",14),F.Vb(18,"mat-form-field"),F.Vb(19,"input",15),F.fc("keyup",function(e){return t.applyFilter7(e.target.value)}),F.Ub(),F.Ub(),F.Ub(),F.Ub(),F.Vb(20,"div",7),F.Qb(21,"mat-paginator",16,17),F.Vb(23,"mat-table",18,19),F.Tb(25,20),F.Ic(26,ae,2,0,"mat-header-cell",21),F.Ic(27,ne,2,1,"mat-cell",22),F.Sb(),F.Tb(28,23),F.Ic(29,ce,2,0,"mat-header-cell",21),F.Ic(30,le,2,1,"mat-cell",22),F.Sb(),F.Tb(31,24),F.Ic(32,se,2,0,"mat-header-cell",25),F.Ic(33,ue,5,2,"mat-cell",22),F.Sb(),F.Ic(34,he,1,0,"mat-header-row",26),F.Ic(35,fe,1,0,"mat-row",27),F.Ub(),F.Ub(),F.Ub(),F.Ub(),F.Ub(),F.Ic(36,me,27,1,"div",28),F.Ic(37,pe,27,1,"div",28),F.Ub(),F.Ub(),F.Ub(),F.Ub(),F.Vb(38,"ngx-spinner",29),F.Vb(39,"p",30),F.Kc(40," Loading... "),F.Ub(),F.Ub()),2&e&&(F.Cb(9),F.pc("hidden",!t.Page.ShowList),F.Cb(4),F.pc("ngIf",t.Screen.Post),F.Cb(8),F.pc("pageSizeOptions",F.sc(9,ge)),F.Cb(2),F.pc("dataSource",t.dataSourceFolios),F.Cb(11),F.pc("matHeaderRowDef",t.displayedColumns7),F.Cb(1),F.pc("matRowDefColumns",t.displayedColumns7),F.Cb(1),F.pc("ngIf",t.Page.ShowAdd),F.Cb(1),F.pc("ngIf",t.Page.ShowEdit),F.Cb(1),F.pc("fullScreen",!0))},directives:[o.n,g.c,p.b,j.a,k.j,z.a,k.c,k.e,k.b,k.g,k.i,W.a,k.d,z.b,k.a,k.f,k.h,n.d,n.k,n.o,n.r],styles:["#divOficiosUpLoad[_ngcontent-%COMP%]{float:left;width:125px;height:125px;text-align:center;cursor:pointer;margin-left:25px;margin-right:25px;border-radius:12px;background-color:#fff;border:1px solid #d3d4d2}#divOficiosUpLoad[_ngcontent-%COMP%]:hover{border:1px solid #a5a6a4}.example-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:100%;min-width:100%}.mat-table[_ngcontent-%COMP%]{overflow:auto;max-height:100%}.mat-column-FolioActivaExpress[_ngcontent-%COMP%], .mat-column-RFC[_ngcontent-%COMP%], .mat-column-TipoAlta[_ngcontent-%COMP%]{flex:0 0 10%!important}.mat-column-FolioActivaExpress[_ngcontent-%COMP%], .mat-column-NombreCliente[_ngcontent-%COMP%], .mat-column-RFC[_ngcontent-%COMP%], .mat-column-TipoAlta[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;width:10%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.mat-column-NombreCliente[_ngcontent-%COMP%]{flex:0 0 30%!important}[_ngcontent-%COMP%]::-moz-placeholder{color:#c8cfdd;opacity:1}[_ngcontent-%COMP%]::placeholder{color:#c8cfdd;opacity:1}[_ngcontent-%COMP%]:-ms-input-placeholder{color:#c8cfdd}[_ngcontent-%COMP%]::-ms-input-placeholder{color:#c8cfdd}.Oferta[_ngcontent-%COMP%]{font-size:11px;font-weight:400;-ms-word-break:break-all;word-break:break-all;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.Offer[_ngcontent-%COMP%]:hover{background-color:#7ab800;color:#fff}"],changeDetection:0}),e})();var ve=r("rqpA");let Ce=(()=>{class e{constructor(e,t){this.api=e,this.router=t,this.oDetalleProveedor={}}GetEmpresas(){return this.api.get("Empresa",{})}}return e.\u0275fac=function(t){return new(t||e)(F.cc(Y.a),F.cc(a.h))},e.\u0275prov=F.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Pe=["matPaginator7"],Ve=["sort7"];function we(e,t){if(1&e){const e=F.Wb();F.Vb(0,"button",33),F.fc("click",function(){return F.zc(e),F.jc().ShowAdd()}),F.Qb(1,"i",34),F.Kc(2," Nuevo "),F.Ub()}}function Se(e,t){1&e&&(F.Vb(0,"mat-header-cell",35),F.Kc(1," N\xfamero"),F.Ub())}function Ge(e,t){if(1&e&&(F.Vb(0,"mat-cell"),F.Kc(1),F.Ub()),2&e){const e=t.index;F.Cb(1),F.Mc(" ",e+1," ")}}function xe(e,t){1&e&&(F.Vb(0,"mat-header-cell",35),F.Kc(1," Nombre "),F.Ub())}function Me(e,t){if(1&e&&(F.Vb(0,"mat-cell"),F.Kc(1),F.Ub()),2&e){const e=t.$implicit;F.Cb(1),F.Oc(" ",e.nombre," ",e.apellidopaterno," ",e.apellidomaterno,"")}}function ke(e,t){1&e&&(F.Vb(0,"mat-header-cell",35),F.Kc(1," Usuario "),F.Ub())}function Ee(e,t){if(1&e&&(F.Vb(0,"mat-cell"),F.Kc(1),F.Ub()),2&e){const e=t.$implicit;F.Cb(1),F.Mc(" ",e.NombreUsuario," ")}}function Ie(e,t){1&e&&(F.Vb(0,"mat-header-cell",35),F.Kc(1," Perf\xedl "),F.Ub())}function Ae(e,t){if(1&e&&(F.Vb(0,"mat-cell"),F.Kc(1),F.Ub()),2&e){const e=t.$implicit;F.Cb(1),F.Mc(" ",e.NombrePerfil," ")}}function ye(e,t){1&e&&(F.Vb(0,"mat-header-cell"),F.Kc(1," Actions "),F.Ub())}function Ke(e,t){if(1&e){const e=F.Wb();F.Vb(0,"button",38),F.fc("click",function(){F.zc(e);const t=F.jc().$implicit;return F.jc().ShowEdit(t)}),F.Qb(1,"i",39),F.Ub()}}function Ne(e,t){if(1&e){const e=F.Wb();F.Vb(0,"button",40),F.fc("click",function(){F.zc(e);const t=F.jc().$implicit;return F.jc().Eliminar(t)}),F.Qb(1,"i",41),F.Ub()}}function je(e,t){if(1&e){const e=F.Wb();F.Vb(0,"button",40),F.fc("click",function(){F.zc(e);const t=F.jc().$implicit;return F.jc().ResetPWD(t)}),F.Qb(1,"i",42),F.Ub()}}function De(e,t){if(1&e&&(F.Vb(0,"mat-cell"),F.Ic(1,Ke,2,0,"button",36),F.Kc(2," \xa0 "),F.Ic(3,Ne,2,0,"button",37),F.Kc(4," \xa0 "),F.Ic(5,je,2,0,"button",37),F.Kc(6," \xa0 "),F.Ub()),2&e){const e=F.jc();F.Cb(1),F.pc("ngIf",e.Screen.Put),F.Cb(2),F.pc("ngIf",e.Screen.Delete),F.Cb(2),F.pc("ngIf",e.Screen.ResetPWD)}}function Oe(e,t){1&e&&F.Qb(0,"mat-header-row")}function ze(e,t){1&e&&F.Qb(0,"mat-row")}function Be(e,t){if(1&e&&(F.Vb(0,"option",52),F.Kc(1),F.Ub()),2&e){const e=t.$implicit;F.pc("value",e.idperfil),F.Cb(1),F.Mc(" ",e.nombreperfil," ")}}function Qe(e,t){if(1&e&&(F.Vb(0,"option",52),F.Kc(1),F.Ub()),2&e){const e=t.$implicit;F.pc("value",e.Valor),F.Cb(1),F.Mc(" ",e.Descripcion," ")}}function Le(e,t){if(1&e){const e=F.Wb();F.Vb(0,"div",7),F.Vb(1,"div",15),F.Vb(2,"div",43),F.Vb(3,"div",1),F.Vb(4,"h3",44),F.Kc(5," Nuevo Usuari@ "),F.Ub(),F.Ub(),F.Vb(6,"div",5),F.Vb(7,"div",7),F.Vb(8,"div",45),F.Vb(9,"label"),F.Kc(10,"Usuario"),F.Ub(),F.Vb(11,"input",46),F.fc("ngModelChange",function(t){return F.zc(e),F.jc().General.Usuario.Usuario=t}),F.Ub(),F.Ub(),F.Vb(12,"div",45),F.Vb(13,"label"),F.Kc(14,"Perfil"),F.Ub(),F.Vb(15,"select",47),F.fc("ngModelChange",function(t){return F.zc(e),F.jc().General.Usuario.Perfil=t}),F.Ic(16,Be,2,2,"option",48),F.Ub(),F.Ub(),F.Vb(17,"div",45),F.Vb(18,"label"),F.Kc(19,"E-mail"),F.Ub(),F.Vb(20,"input",46),F.fc("ngModelChange",function(t){return F.zc(e),F.jc().General.Usuario.Correo=t}),F.Ub(),F.Ub(),F.Ub(),F.Qb(21,"br"),F.Vb(22,"div",7),F.Vb(23,"div",45),F.Vb(24,"label"),F.Kc(25,"Nombre"),F.Ub(),F.Vb(26,"input",46),F.fc("ngModelChange",function(t){return F.zc(e),F.jc().General.Usuario.Nombre=t}),F.Ub(),F.Ub(),F.Vb(27,"div",45),F.Vb(28,"label"),F.Kc(29,"Apellido Paterno"),F.Ub(),F.Vb(30,"input",46),F.fc("ngModelChange",function(t){return F.zc(e),F.jc().General.Usuario.APA=t}),F.Ub(),F.Ub(),F.Vb(31,"div",45),F.Vb(32,"label"),F.Kc(33,"Apellido Materno"),F.Ub(),F.Vb(34,"input",46),F.fc("ngModelChange",function(t){return F.zc(e),F.jc().General.Usuario.AMA=t}),F.Ub(),F.Ub(),F.Ub(),F.Qb(35,"br"),F.Vb(36,"div",7),F.Vb(37,"div",45),F.Vb(38,"label"),F.Kc(39,"Empresa"),F.Ub(),F.Vb(40,"select",49),F.fc("ngModelChange",function(t){return F.zc(e),F.jc().General.Usuario.IdEmpresa=t}),F.Ic(41,Qe,2,2,"option",48),F.Ub(),F.Ub(),F.Vb(42,"div",50),F.Vb(43,"label"),F.Kc(44,"Estatus"),F.Ub(),F.Vb(45,"select",51),F.fc("ngModelChange",function(t){return F.zc(e),F.jc().General.Usuario.Estatus=t}),F.Vb(46,"option",52),F.Kc(47,"Activo"),F.Ub(),F.Ub(),F.Ub(),F.Ub(),F.Ub(),F.Vb(48,"div",53),F.Vb(49,"div",15),F.Vb(50,"button",54),F.fc("click",function(){return F.zc(e),F.jc().Guardar()}),F.Qb(51,"i",55),F.Kc(52," Guardar"),F.Ub(),F.Vb(53,"button",56),F.fc("click",function(){return F.zc(e),F.jc().Cancelar()}),F.Qb(54,"i",57),F.Kc(55," Cancelar"),F.Ub(),F.Ub(),F.Ub(),F.Ub(),F.Ub(),F.Ub()}if(2&e){const e=F.jc();F.Cb(11),F.pc("ngModel",e.General.Usuario.Usuario),F.Cb(4),F.pc("ngModel",e.General.Usuario.Perfil)("value",0),F.Cb(1),F.pc("ngForOf",e.General.Perfiles),F.Cb(4),F.pc("ngModel",e.General.Usuario.Correo),F.Cb(6),F.pc("ngModel",e.General.Usuario.Nombre),F.Cb(4),F.pc("ngModel",e.General.Usuario.APA),F.Cb(4),F.pc("ngModel",e.General.Usuario.AMA),F.Cb(6),F.pc("value",0)("ngModel",e.General.Usuario.IdEmpresa),F.Cb(1),F.pc("ngForOf",e.ListaEmpresas),F.Cb(4),F.pc("ngModel",e.General.Usuario.Estatus)("value",1),F.Cb(1),F.pc("value",1)}}function _e(e,t){if(1&e&&(F.Vb(0,"option",52),F.Kc(1),F.Ub()),2&e){const e=t.$implicit;F.pc("value",e.idperfil),F.Cb(1),F.Mc(" ",e.nombreperfil," ")}}function Fe(e,t){if(1&e&&(F.Vb(0,"option",52),F.Kc(1),F.Ub()),2&e){const e=t.$implicit;F.pc("value",e.Valor),F.Cb(1),F.Mc(" ",e.Descripcion," ")}}function Re(e,t){if(1&e){const e=F.Wb();F.Vb(0,"div",7),F.Vb(1,"div",15),F.Vb(2,"div",43),F.Vb(3,"div",1),F.Vb(4,"h3",44),F.Kc(5," Editar Usuario "),F.Ub(),F.Ub(),F.Vb(6,"div",5),F.Vb(7,"div",7),F.Vb(8,"div",50),F.Vb(9,"label"),F.Kc(10,"Usuario"),F.Ub(),F.Vb(11,"input",58),F.fc("ngModelChange",function(t){return F.zc(e),F.jc().General.Usuario.Usuario=t}),F.Ub(),F.Ub(),F.Vb(12,"div",45),F.Vb(13,"label"),F.Kc(14,"Perfil"),F.Ub(),F.Vb(15,"select",47),F.fc("ngModelChange",function(t){return F.zc(e),F.jc().General.Usuario.Perfil=t}),F.Ic(16,_e,2,2,"option",48),F.Ub(),F.Ub(),F.Vb(17,"div",45),F.Vb(18,"label"),F.Kc(19,"Correo Electr\xf3nico"),F.Ub(),F.Vb(20,"input",59),F.fc("ngModelChange",function(t){return F.zc(e),F.jc().General.Usuario.Correo=t}),F.Ub(),F.Ub(),F.Ub(),F.Qb(21,"br"),F.Vb(22,"div",7),F.Vb(23,"div",45),F.Vb(24,"label"),F.Kc(25,"Nombre"),F.Ub(),F.Vb(26,"input",46),F.fc("ngModelChange",function(t){return F.zc(e),F.jc().General.Usuario.Nombre=t}),F.Ub(),F.Ub(),F.Vb(27,"div",45),F.Vb(28,"label"),F.Kc(29,"Apellido Paterno"),F.Ub(),F.Vb(30,"input",46),F.fc("ngModelChange",function(t){return F.zc(e),F.jc().General.Usuario.APA=t}),F.Ub(),F.Ub(),F.Vb(31,"div",45),F.Vb(32,"label"),F.Kc(33,"Apellido Materno"),F.Ub(),F.Vb(34,"input",46),F.fc("ngModelChange",function(t){return F.zc(e),F.jc().General.Usuario.AMA=t}),F.Ub(),F.Ub(),F.Ub(),F.Qb(35,"br"),F.Vb(36,"div",7),F.Vb(37,"div",45),F.Vb(38,"label"),F.Kc(39,"Empresa"),F.Ub(),F.Vb(40,"select",49),F.fc("ngModelChange",function(t){return F.zc(e),F.jc().General.Usuario.IdEmpresa=t}),F.Ic(41,Fe,2,2,"option",48),F.Ub(),F.Ub(),F.Vb(42,"div",45),F.Vb(43,"label"),F.Kc(44,"Estatus"),F.Ub(),F.Vb(45,"select",51),F.fc("ngModelChange",function(t){return F.zc(e),F.jc().General.Usuario.Estatus=t}),F.Vb(46,"option",52),F.Kc(47,"Activo"),F.Ub(),F.Ub(),F.Ub(),F.Ub(),F.Ub(),F.Vb(48,"div",53),F.Vb(49,"div",7),F.Vb(50,"div",15),F.Vb(51,"button",54),F.fc("click",function(){return F.zc(e),F.jc().GuardarEditar()}),F.Qb(52,"i",55),F.Kc(53," Guardar"),F.Ub(),F.Kc(54,"\xa0 "),F.Vb(55,"button",56),F.fc("click",function(){return F.zc(e),F.jc().Cancelar()}),F.Qb(56,"i",57),F.Kc(57," Cancelar"),F.Ub(),F.Ub(),F.Ub(),F.Ub(),F.Ub(),F.Ub(),F.Ub()}if(2&e){const e=F.jc();F.Cb(11),F.pc("ngModel",e.General.Usuario.Usuario),F.Cb(4),F.pc("ngModel",e.General.Usuario.Perfil)("value",0),F.Cb(1),F.pc("ngForOf",e.General.Perfiles),F.Cb(4),F.pc("ngModel",e.General.Usuario.Correo),F.Cb(6),F.pc("ngModel",e.General.Usuario.Nombre),F.Cb(4),F.pc("ngModel",e.General.Usuario.APA),F.Cb(4),F.pc("ngModel",e.General.Usuario.AMA),F.Cb(6),F.pc("value",0)("ngModel",e.General.Usuario.IdEmpresa),F.Cb(1),F.pc("ngForOf",e.ListaEmpresas),F.Cb(4),F.pc("ngModel",e.General.Usuario.Estatus)("value",1),F.Cb(1),F.pc("value",1)}}const Te=function(){return[25,50,100]},We=[{path:"",component:R,children:[{path:"security/Perfil",component:Ue},{path:"security/Usuario",component:(()=>{class e{constructor(e,t,r,i,o,a,n,c,l,s,b){this.snackBar=e,this.ref=t,this.AuthService=r,this.modalService=i,this.toastr=o,this.spinnerService=a,this.router=n,this.sanitizer=c,this.UsuarioService=l,this.ScreenActionsService=s,this.EmpresaService=b,this.Page={},this.Screen={},this.General={},this.displayedColumns7=["No","nombre","NombreUsuario","NombrePerfil","actions"],this.ListaEmpresas=[],this.Page.ShowAdd=!1,this.Page.ShowEdit=!1,this.Page.ShowList=!0,this.Page.Controller=this.router.routerState.snapshot.url.toString().substr(this.router.routerState.snapshot.url.lastIndexOf("/")+1,this.router.routerState.snapshot.url.toString().length-1),this.General.Perfil={},this.AuthService.IsAlive()}ngOnInit(){this.ScreenActionsService.Promise_GetById(this.Page.Controller).then(e=>{this.Screen=e,this.CargaEmpresas(),this.CargaDatos()},e=>{this.handleError(e)})}CargaEmpresas(){this.dataSourceUsuarios=new k.k([]),this.spinnerService.show(),this.EmpresaService.GetEmpresas().subscribe(e=>{this.ListaEmpresas=e},e=>{this.handleError(e)})}CargaDatos(){this.dataSourceUsuarios=new k.k([]),this.spinnerService.show(),this.UsuarioService.GetUsuarios().subscribe(e=>{this.dataSourceUsuarios=new k.k(e[0]),this.General.Perfiles=e[1],this.dataSourceUsuarios.paginator=this.paginator7,this.dataSourceUsuarios.sort=this.sort7,this.ref.markForCheck(),this.spinnerService.hide()},e=>{this.handleError(e)})}applyFilter7(e){this.dataSourceUsuarios.filter=e.trim().toLowerCase(),this.dataSourceUsuarios.paginator&&this.dataSourceUsuarios.paginator.firstPage()}ShowAdd(){this.General.Usuario={},this.General.Usuario.Perfil="2",this.General.Usuario.Estatus=1,this.Page.ShowAdd=!0,this.Page.ShowList=!1,this.Page.ShowEdit=!1,this.ref.markForCheck()}Cancelar(){this.Page.ShowList=!0,this.Page.ShowAdd=!1,this.Page.ShowEdit=!1}ShowEdit(e){console.log(e),this.General.Usuario={},this.General.Usuario.Usuario=e.NombreUsuario,this.General.Usuario.Contra="**********",this.General.Usuario.Perfil=e.IdPerfil,this.General.Usuario.Correo=e.CorreoElectronico,this.General.Usuario.Nombre=e.nombre,this.General.Usuario.APA=e.apellidopaterno,this.General.Usuario.AMA=e.apellidomaterno,this.General.Usuario.Estatus=1,this.General.Usuario.IdUsuario=e.IdUsuario,this.General.Usuario.IdEmpresa=e.IdEmpresa,this.General.Usuario.IdEmpleado=e.idempleado,this.General.Perfil.IdPerfil=e.IdPerfil,this.General.Perfil.NombrePerfil=e.NombrePerfil,this.Page.ShowEdit=!0,this.Page.ShowAdd=!1,this.Page.ShowList=!1,this.ref.markForCheck()}Guardar(){if(null==this.General.Usuario.Usuario||this.General.Usuario.Usuario.length<7)this.toastr.error("La longitud del usuario debe ser mayor a 6");else if(this.validateEmail(this.General.Usuario.Correo))if(null==this.General.Usuario.Nombre||this.General.Usuario.Nombre.length<2)this.toastr.error("Ingrese un nombre v\xe1lido");else if(null==this.General.Usuario.APA||this.General.Usuario.APA.length<2)this.toastr.error("Ingrese un apellido paterno v\xe1lido");else if(null==this.General.Usuario.AMA||this.General.Usuario.AMA.length<2)this.toastr.error("Ingrese un apellido materno v\xe1lido");else{var e="PasswordTemporal"+this.getRandomInt(1,1e4);this.General.Usuario.Contra=e,this.UsuarioService.Post(this.General.Usuario).subscribe(t=>{H.a.fire({title:"Confirmaci\xf3n",text:"Usuario registrado correctamente. Contrase\xf1a: "+e,icon:"success",showCancelButton:!1,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Aceptar"}).then(e=>{}),this.CargaDatos(),this.Cancelar(),this.spinnerService.hide()},e=>{this.handleError(e)})}else this.toastr.error("El correo proporcionado no es v\xe1lido, favor de revisar")}GuardarEditar(){null==this.General.Usuario.Nombre||this.General.Usuario.Nombre.length<2?this.toastr.error("Ingrese un nombre v\xe1lido"):null==this.General.Usuario.APA||this.General.Usuario.APA.length<2?this.toastr.error("Ingrese un apellido paterno v\xe1lido"):null==this.General.Usuario.AMA||this.General.Usuario.AMA.length<2?this.toastr.error("Ingrese un apellido materno v\xe1lido"):this.validateEmail(this.General.Usuario.Correo)?this.UsuarioService.UpdateUser(this.General.Usuario).subscribe(e=>{this.toastr.success("La informaci\xf3n se actualiz\xf3 correctamente"),this.CargaDatos(),this.Cancelar(),this.spinnerService.hide()},e=>{this.handleError(e)}):this.toastr.error("El correo proporcionado no es v\xe1lido, favor de revisar")}ResetPWD(e){H.a.fire({title:"Confirmaci\xf3n",text:"\xbfRestablecer contrase\xf1a de: "+e.NombreUsuario+"?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Confirmar",cancelButtonText:"Cancelar"}).then(t=>{t.value&&this.GuardarReset(e.NombreUsuario)})}GuardarReset(e){var t="Telefonica"+this.getRandomInt(1,1e4);this.UsuarioService.ResetPWD({NombreUsuario:e,Password:t}).subscribe(e=>{H.a.fire({title:"Confirmaci\xf3n",text:"Contrase\xf1a actualizada correctamente a: "+t,icon:"success",showCancelButton:!1,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Aceptar"}).then(e=>{}),this.Cancelar(),this.CargaDatos()},e=>{this.handleError(e)})}Eliminar(e){H.a.fire({title:"Confirmaci\xf3n",text:"Eliminar la informaci\xf3n del usuario: "+e.NombreUsuario,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Eliminar",cancelButtonText:"Cancelar"}).then(t=>{t.value&&this.GuardarEliminar(e.IdUsuario)})}GuardarEliminar(e){this.UsuarioService.Delete({IdUsuario:e}).subscribe(()=>{this.toastr.success("La informaci\xf3n se elimin\xf3 correctamente"),this.Cancelar(),this.CargaDatos()},e=>{this.handleError(e)})}validateEmail(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{8,}))$/.test(e)}getRandomInt(e,t){return Math.floor(Math.random()*(t-e+1)+e)}handleError(e){this.AuthService.handleError(e),e&&e.error.Descripcion&&this.toastr.error(e.error.Descripcion),this.spinnerService.hide()}openSnackBar(e,t){this.snackBar.open(e,t,{duration:2e3})}}return e.\u0275fac=function(t){return new(t||e)(F.Pb(M.a),F.Pb(F.i),F.Pb(q.a),F.Pb(J.y),F.Pb(X.b),F.Pb(W.c),F.Pb(a.h),F.Pb(Z.b),F.Pb(ve.a),F.Pb(te.a),F.Pb(Ce))},e.\u0275cmp=F.Jb({type:e,selectors:[["kt-usuarios"]],viewQuery:function(e,t){if(1&e&&(F.Ec(Pe,!0),F.Ec(Ve,!0)),2&e){let e;F.wc(e=F.gc())&&(t.paginator7=e.first),F.wc(e=F.gc())&&(t.sort7=e.first)}},decls:46,vars:10,consts:[[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"fa","fa-list","icon-md"],[1,"card-body"],[3,"hidden"],[1,"row"],[1,"col-xs-12","col-md-10"],[1,"col-xs-12","col-md-2","text-right"],["type","button","style","color: #7AB800 !important","class","btn btn-outline-secondary",3,"click",4,"ngIf"],[1,"example-container"],[1,"col-xs-12","col-md-6",2,"flex","0 0 0% !important"],[1,"example-header"],["matInput","","placeholder","Filter",3,"keyup"],[1,"col-xs-12","col-md-12"],[3,"pageSizeOptions"],["matPaginator7",""],["matSort","",3,"dataSource"],["sort7","matSort"],["matColumnDef","No"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","nombre"],["matColumnDef","NombreUsuario"],["matColumnDef","NombrePerfil"],["matColumnDef","actions"],[4,"matHeaderCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["class","row",4,"ngIf"],["bdColor","rgba(0, 0, 0, 0.8)","size","medium","color","#fff","type","ball-atom",3,"fullScreen"],[2,"color","white"],["type","button",1,"btn","btn-outline-secondary",2,"color","#7AB800 !important",3,"click"],[1,"fas","fa-plus-circle"],["mat-sort-header",""],["style","width:40px !important;","type","button","class","btn btn-xs btn-default btn-text-default btn-hover-primary btn-icon",3,"click",4,"ngIf"],["style","width:40px !important;","type","button","class","btn btn-xs btn-default btn-text-default btn-hover-danger btn-icon",3,"click",4,"ngIf"],["type","button",1,"btn","btn-xs","btn-default","btn-text-default","btn-hover-primary","btn-icon",2,"width","40px !important",3,"click"],[1,"fa","fa-edit"],["type","button",1,"btn","btn-xs","btn-default","btn-text-default","btn-hover-danger","btn-icon",2,"width","40px !important",3,"click"],[1,"fa","fa-trash-alt"],[1,"fa","fa-unlock"],[1,"card","card-custom",2,"box-shadow","0px 0px"],[1,"h3"],[1,"col-md-4"],["maxlength","50","type","text",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],["name","select",1,"form-control",3,"ngModel","value","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["required","","name","select","name","ddlEmpresa",1,"form-control","form-control-sm",3,"value","ngModel","ngModelChange"],[1,"col-md-2"],["disabled","","name","select",1,"form-control",3,"ngModel","value","ngModelChange"],[3,"value"],[1,"card-footer",2,"border-top","0px","padding","0px"],[1,"btn","btn-light","btn-text-success","btn-hover-text-success","font-weight-bold",3,"click"],[1,"fa","fa-save"],[1,"btn","btn-light","btn-text-dark","btn-hover-text-dark","font-weight-bold",2,"margin-left","5px",3,"click"],[1,"fa","fa-times"],["disabled","","maxlength","50","type","text",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],["maxlength","50","type","email",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(F.Vb(0,"div",0),F.Vb(1,"div",1),F.Vb(2,"div",2),F.Vb(3,"h2",3),F.Qb(4,"i",4),F.Kc(5," Administraci\xf3n de Usuarios"),F.Ub(),F.Ub(),F.Ub(),F.Vb(6,"div",5),F.Vb(7,"div"),F.Vb(8,"div",6),F.Vb(9,"div",7),F.Qb(10,"div",8),F.Vb(11,"div",9),F.Ic(12,we,3,0,"button",10),F.Ub(),F.Ub(),F.Vb(13,"div",7),F.Vb(14,"div",11),F.Vb(15,"div",12),F.Vb(16,"div",13),F.Vb(17,"mat-form-field"),F.Vb(18,"input",14),F.fc("keyup",function(e){return t.applyFilter7(e.target.value)}),F.Ub(),F.Ub(),F.Ub(),F.Ub(),F.Vb(19,"div",15),F.Qb(20,"mat-paginator",16,17),F.Vb(22,"mat-table",18,19),F.Tb(24,20),F.Ic(25,Se,2,0,"mat-header-cell",21),F.Ic(26,Ge,2,1,"mat-cell",22),F.Sb(),F.Tb(27,23),F.Ic(28,xe,2,0,"mat-header-cell",21),F.Ic(29,Me,2,3,"mat-cell",22),F.Sb(),F.Tb(30,24),F.Ic(31,ke,2,0,"mat-header-cell",21),F.Ic(32,Ee,2,1,"mat-cell",22),F.Sb(),F.Tb(33,25),F.Ic(34,Ie,2,0,"mat-header-cell",21),F.Ic(35,Ae,2,1,"mat-cell",22),F.Sb(),F.Tb(36,26),F.Ic(37,ye,2,0,"mat-header-cell",27),F.Ic(38,De,7,3,"mat-cell",22),F.Sb(),F.Ic(39,Oe,1,0,"mat-header-row",28),F.Ic(40,ze,1,0,"mat-row",29),F.Ub(),F.Ub(),F.Ub(),F.Ub(),F.Ub(),F.Ic(41,Le,56,14,"div",30),F.Ic(42,Re,58,14,"div",30),F.Ub(),F.Ub(),F.Ub(),F.Vb(43,"ngx-spinner",31),F.Vb(44,"p",32),F.Kc(45," Loading... "),F.Ub(),F.Ub()),2&e&&(F.Cb(8),F.pc("hidden",!t.Page.ShowList),F.Cb(4),F.pc("ngIf",t.Screen.Post),F.Cb(8),F.pc("pageSizeOptions",F.sc(9,Te)),F.Cb(2),F.pc("dataSource",t.dataSourceUsuarios),F.Cb(17),F.pc("matHeaderRowDef",t.displayedColumns7),F.Cb(1),F.pc("matRowDefColumns",t.displayedColumns7),F.Cb(1),F.pc("ngIf",t.Page.ShowAdd),F.Cb(1),F.pc("ngIf",t.Page.ShowEdit),F.Cb(1),F.pc("fullScreen",!0))},directives:[o.n,g.c,p.b,j.a,k.j,z.a,k.c,k.e,k.b,k.g,k.i,W.a,k.d,z.b,k.a,k.f,k.h,n.d,n.k,n.o,n.r,n.w,o.m,n.v,n.s,n.y],styles:["#divOficiosUpLoad[_ngcontent-%COMP%]{float:left;width:125px;height:125px;text-align:center;cursor:pointer;margin-left:25px;margin-right:25px;border-radius:12px;background-color:#fff;border:1px solid #d3d4d2}#divOficiosUpLoad[_ngcontent-%COMP%]:hover{border:1px solid #a5a6a4}.example-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:100%;min-width:100%}.mat-table[_ngcontent-%COMP%]{overflow:auto;max-height:100%}.mat-column-NombreCliente[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 30%!important;width:10%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}[_ngcontent-%COMP%]::-moz-placeholder{color:#c8cfdd;opacity:1}[_ngcontent-%COMP%]::placeholder{color:#c8cfdd;opacity:1}[_ngcontent-%COMP%]:-ms-input-placeholder{color:#c8cfdd}[_ngcontent-%COMP%]::-ms-input-placeholder{color:#c8cfdd}.Oferta[_ngcontent-%COMP%]{font-size:11px;font-weight:400;-ms-word-break:break-all;word-break:break-all;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.Offer[_ngcontent-%COMP%]:hover{background-color:#7ab800;color:#fff}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{height:36px}"],changeDetection:0}),e})()}]}];let $e=(()=>{class e{}return e.\u0275mod=F.Nb({type:e}),e.\u0275inj=F.Mb({factory:function(t){return new(t||e)},providers:[u.c,{provide:Q.d,useValue:{}},{provide:Q.a,useValue:{}},{provide:b.f,useValue:"en-GB"},{provide:m.a,useValue:{useUtc:!0}}],imports:[[o.c,p.c,g.e,f.c,U.b,E.d,A.b,w.g,V.b,v.c,u.b,b.m,s.b,h.b,S.c,C.d,P.b,I.g,G.b,x.b,M.b,k.l,y.b,B.b,Q.c,L.b,_.b,z.c,O.d,D.e,j.b,d.f,b.u,c.a,i.c,N.d,K.c,l.a,T.a,W.b,n.j,n.u,a.l.forChild(We)],a.l]}),e})()},ptnc:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var i=r("fXoL"),o=r("ap2d"),a=r("tyNb");let n=(()=>{class e{constructor(e,t){this.api=e,this.router=t}Promise_GetById(e){return this.api.getByIdToPromise("pantalla/Actions",e)}}return e.\u0275fac=function(t){return new(t||e)(i.cc(o.a),i.cc(a.h))},e.\u0275prov=i.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);