import './polyfills.server.mjs';
import{A as R,B,C as h,D,E as F,F as H,G as q,J as E,N as M,O,R as j,a as c,b as y,c as d,d as i,e as f,f as A,g,h as e,i as n,j as a,k as l,l as s,m,n as u,o as I,p as x,u as P,x as S,z as w}from"./chunk-3PGHY6QB.mjs";var v=class r{title="website";static \u0275fac=function(t){return new(t||r)};static \u0275cmp=c({type:r,selectors:[["app-root"]],standalone:!0,features:[u],decls:2,vars:0,consts:[[1,"container","mx-auto","px-4","w-1/2","py-8"]],template:function(t,o){t&1&&(e(0,"div",0),a(1,"router-outlet"),n())},dependencies:[O]})};function $(r,p){if(r&1&&(e(0,"div",3),a(1,"img",4),e(2,"div",5)(3,"h2",6),s(4),n(),e(5,"p",7),s(6),n(),e(7,"a",8),s(8,"Read More"),n()()()),r&2){let t=p.$implicit;i(),l("src",t.coverImage.url,d),i(3),m(t.title),i(2),m(t.brief),i(),l("href",t.slug,d)}}var Q=`
query {
  publication(host: "compiler.blog") {
    title
    posts(first: 10) {
      edges {
        node {
          slug
          title
          brief
          url
          coverImage {
            url
            photographer
          }
        }
      }
    }
  }
}
`,C=class r{constructor(p){this.httpClient=p}blogPosts=[];ngOnInit(){this.httpClient.post("https://gql.hashnode.com",{query:Q},{headers:{"Content-Type":"application/json",Accept:"application/json"}}).subscribe(t=>{this.blogPosts=t.data.publication.posts.edges.map(o=>o.node)})}static \u0275fac=function(t){return new(t||r)(f(h))};static \u0275cmp=c({type:r,selectors:[["app-list"]],standalone:!0,features:[u],decls:4,vars:1,consts:[[1,"text-3xl","font-bold","mb-4"],[1,"grid","grid-cols-1","gap-8"],["class","bg-white rounded-lg shadow-md overflow-hidden",4,"ngFor","ngForOf"],[1,"bg-white","rounded-lg","shadow-md","overflow-hidden"],["alt","Blog Post Image",1,"w-full","h-48","object-cover",3,"src"],[1,"p-4"],[1,"text-xl","font-semibold","mb-2"],[1,"text-gray-600"],[1,"block","text-blue-500","mt-2","hover:underline",3,"href"]],template:function(t,o){t&1&&(e(0,"h1",0),s(1,"Latest Blog Posts"),n(),e(2,"div",1),A(3,$,9,4,"div",2),n()),t&2&&(i(3),g("ngForOf",o.blogPosts))},dependencies:[B,w],encapsulation:2})};var k=`
query ($slug: String!) {
  publication(host: "compiler.blog") {
    post(slug: $slug) {
      title
      brief
      publishedAt
      author {
        name
        profilePicture
      }
      content {
        html
      }
      coverImage {
        url
      }
    }
  }
}
`,b=class r{constructor(p,t){this.httpClient=p;this.route=t}post={};ngOnInit(){let t=this.route.snapshot.params.slug;this.httpClient.post("https://gql.hashnode.com",{query:k,variables:{slug:t}},{headers:{"Content-Type":"application/json",Accept:"application/json"}}).subscribe(U=>{this.post=U.data.publication.post})}static \u0275fac=function(t){return new(t||r)(f(h),f(M))};static \u0275cmp=c({type:r,selectors:[["app-post"]],standalone:!0,features:[u],decls:18,vars:10,consts:[[1,"bg-white","rounded-lg","shadow-md","overflow-hidden"],[1,"w-full","h-64","object-cover",3,"src","alt"],[1,"p-6"],[1,"text-3xl","font-bold","mb-4"],[1,"flex","items-center","mb-4"],[1,"w-10","h-10","rounded-full","mr-2",3,"src","alt"],[1,"text-gray-600"],[1,"font-semibold"],[1,"prose","max-w-none",3,"innerHTML"]],template:function(t,o){t&1&&(e(0,"article",0),a(1,"img",1),e(2,"div",2)(3,"h1",3),s(4),n(),e(5,"div",4),a(6,"img",5),e(7,"div")(8,"p",6),s(9,"Written by "),e(10,"span",7),s(11),n()(),e(12,"p",6),s(13,"Published on "),e(14,"span",7),s(15),I(16,"date"),n()()()(),a(17,"div",8),n()()),t&2&&(i(),l("src",o.post.coverImage.url,d),l("alt",o.post.title),i(3),m(o.post.title),i(2),l("src",o.post.author.profilePicture,d),l("alt",o.post.author.name),i(5),m(o.post.author.name),i(4),m(x(16,8,o.post.publishedAt)),i(2),g("innerHTML",o.post.content.html,y))},dependencies:[R],encapsulation:2})};var N=[{path:"",component:C},{path:":slug",component:b}];var z={providers:[D(F()),P({eventCoalescing:!0}),j(N),q()]};var Z={providers:[E()]},W=S(z,Z);var G=()=>H(v,W),At=G;export{At as a};
