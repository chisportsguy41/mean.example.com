(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{iA4i:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=(u("JQBr"),u("U0XV")),o=function(){function l(l,n,u,e){this.usersService=l,this.router=n,this.route=u,this.cookieService=e}return l.prototype.ngOnInit=function(){var l=this;1==this.cookieService.check("sugar")?this.route.params.subscribe(function(n){l.getUser(n.id)}):this.router.navigate(["/login"])},l.prototype.getUser=function(l){var n=this;this.usersService.getUser(l).subscribe(function(l){n.user=l.user})},l.prototype.deleteUser=function(){var l=this;confirm("Are you sure you want to delete "+this.user.username+"?")&&this.usersService.deleteUser(this.user._id).subscribe(function(){l.router.navigateByUrl("/users")})},l}(),r=function(){return function(){}}(),i=u("pMnS"),b=u("oBZk"),c=u("ZZ/e"),s=u("Ip0R"),a=u("ZYCi"),p=u("jmvC"),f=e.nb({encapsulation:0,styles:[[""]],data:{}});function h(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,5,"ion-item",[],null,null,null,b.M,b.o)),e.ob(1,49152,null,0,c.F,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,3,"ion-label",[["text-center",""]],null,null,null,b.N,b.p)),e.ob(3,49152,null,0,c.L,[e.h,e.k],null,null),(l()(),e.pb(4,0,null,0,1,"ion-spinner",[],null,null,null,b.S,b.u)),e.ob(5,49152,null,0,c.pb,[e.h,e.k],null,null)],null,null)}function k(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,11,"ion-card",[],null,null,null,b.F,b.e)),e.ob(1,49152,null,0,c.k,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,4,"ion-card-header",[],null,null,null,b.D,b.g)),e.ob(3,49152,null,0,c.m,[e.h,e.k],null,null),(l()(),e.pb(4,0,null,0,2,"ion-card-title",[],null,null,null,b.E,b.h)),e.ob(5,49152,null,0,c.o,[e.h,e.k],null,null),(l()(),e.Db(6,0,["Are you sure you want to delete "," ","?"])),(l()(),e.pb(7,0,null,0,4,"ion-card-content",[],null,null,null,b.C,b.f)),e.ob(8,49152,null,0,c.l,[e.h,e.k],null,null),(l()(),e.pb(9,0,null,0,2,"ion-button",[["color","danger"],["expand","full"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.deleteUser()&&e),e},b.A,b.c)),e.ob(10,49152,null,0,c.i,[e.h,e.k],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),e.Db(-1,0,["Yes"]))],function(l,n){l(n,10,0,"danger","full")},function(l,n){var u=n.component;l(n,6,0,u.user.first_name,u.user.last_name)})}function d(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,11,"ion-header",[],null,null,null,b.J,b.l)),e.ob(1,49152,null,0,c.z,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,9,"ion-toolbar",[],null,null,null,b.V,b.x)),e.ob(3,49152,null,0,c.zb,[e.h,e.k],null,null),(l()(),e.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.B,b.d)),e.ob(5,49152,null,0,c.j,[e.h,e.k],null,null),(l()(),e.pb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.yb(l,8).onClick(u)&&t),t},b.z,b.b)),e.ob(7,49152,null,0,c.e,[e.h,e.k],null,null),e.ob(8,16384,null,0,c.f,[[2,c.fb],c.Fb],null,null),(l()(),e.pb(9,0,null,0,2,"ion-title",[],null,null,null,b.U,b.w)),e.ob(10,49152,null,0,c.xb,[e.h,e.k],null,null),(l()(),e.Db(-1,0,["Delete User"])),(l()(),e.pb(12,0,null,null,5,"ion-content",[["padding",""]],null,null,null,b.G,b.i)),e.ob(13,49152,null,0,c.s,[e.h,e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,h)),e.ob(15,16384,null,0,s.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,k)),e.ob(17,16384,null,0,s.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,15,0,!u.user),l(n,17,0,u.user)},null)}function g(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,1,"app-user-delete",[],null,null,null,d,f)),e.ob(1,114688,null,0,o,[t.a,a.m,a.a,p.a],null,null)],function(l,n){l(n,1,0)},null)}var w=e.lb("app-user-delete",o,g,{},{},[]),v=u("gIcY");u.d(n,"UserDeletePageModuleNgFactory",function(){return m});var m=e.mb(r,[],function(l){return e.vb([e.wb(512,e.j,e.bb,[[8,[i.a,w]],[3,e.j],e.x]),e.wb(4608,s.k,s.j,[e.u,[2,s.r]]),e.wb(4608,v.g,v.g,[]),e.wb(4608,c.a,c.a,[e.z,e.g]),e.wb(4608,c.Eb,c.Eb,[c.a,e.j,e.q]),e.wb(4608,c.Hb,c.Hb,[c.a,e.j,e.q]),e.wb(1073742336,s.b,s.b,[]),e.wb(1073742336,v.f,v.f,[]),e.wb(1073742336,v.a,v.a,[]),e.wb(1073742336,c.Bb,c.Bb,[]),e.wb(1073742336,a.p,a.p,[[2,a.v],[2,a.m]]),e.wb(1073742336,r,r,[]),e.wb(1024,a.k,function(){return[[{path:"",component:o}]]},[])])})}}]);