import{j as i}from"./jsx-runtime-CkxqCPlQ.js";import{r as l}from"./index-DJO9vBfz.js";import{s as k,c as f,v as y,b as D}from"./Points-D1gxx6HH.js";import{G as F}from"./Geometric-sZ--qBRS.js";const s=({as:o,className:g,columns:n,cellSize:d=[1,1],columnCell:w="1fr",columnPrefix:u,columnSuffix:c,clipPath:b,children:v,gap:a,aspectRatio:p="1/1",layout:S=t=>[t%n,Math.floor(t/n),""],row:T,style:{backgroundColor:V=void 0,borderColor:q=void 0,borderWidth:x=void 0,boxShadow:N=void 0,...C}={},...G})=>{const t=o||"div",r=a?(Array.isArray(a)?a:[a,a]).map(e=>k(e)):void 0,E=`${u?u+" ":""}repeat(${n}, ${w})${c?" "+c:""}`,_=l.Children.map(v,(e,$)=>{const[j,z,m]=S($,n);let h=e;if(l.isValidElement(e)){const{props:{children:A,className:I,...P}}=e;h=l.cloneElement(e,{className:f(I,"shapely-grid-cell"),children:i.jsxs(i.Fragment,{children:[i.jsx(F,{src:m,fill:V,stroke:q,strokeWidth:x,objectBounding:!0}),A]}),...P})}return i.jsx("div",{className:"shapely-grid-cell-wrapper",style:{...y({clipPath:`url(${m}-clip)`,column:j+1,row:z+1,aspectRatio:p})},children:h})});return i.jsx(t,{className:f(g,"shapely-grid"),style:{gridTemplateColumns:E,gridAutoRows:T,...y({...r?{columnGap:r[0],rowGap:r[1]}:{},aspectRatio:p,columnSize:`${d[0]}`,rowSize:`${d[1]}`,clipPath:b}),...D(N),...C},...G,children:_})},W=s;try{s.displayName="ShapelyGrid",s.__docgenInfo={description:"This is the base level grid component. While the examples provided are to illustrate how this was used to build out higher level layouts this can require a lot of properties to work properly.",displayName:"ShapelyGrid",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType | undefined"}},aspectRatio:{defaultValue:{value:"1/1"},description:"Aspect ratio is assumed to be 1/1 unless provided different. This is benefitial in preventing malshaped grid cells.",name:"aspectRatio",required:!1,type:{name:"string | undefined"}},columns:{defaultValue:null,description:"The number of columns per row.",name:"columns",required:!0,type:{name:"number"}},cellSize:{defaultValue:{value:"[1,1]"},description:"This is the number of fractional units that dimension should span in gridRowEnd and gridColumnEnd.",name:"cellSize",required:!1,type:{name:"[number, number] | undefined"}},columnCell:{defaultValue:{value:"1fr"},description:"This value is the representation of the cell width in fractional units this will be used within a repeat function to generate the columnTemplate",name:"columnCell",required:!1,type:{name:"string | undefined"}},columnPrefix:{defaultValue:null,description:"This property can be used to add a prefix before the repeat function",name:"columnPrefix",required:!1,type:{name:"string | undefined"}},columnSuffix:{defaultValue:null,description:"This property can be used to add a suffix after the repeat function",name:"columnSuffix",required:!1,type:{name:"string | undefined"}},clipPath:{defaultValue:null,description:"Because many of the cells bounding rectangles will overlap in a custom layout this can be used to clip the cells so they do not interfere with each others hover and click methods.",name:"clipPath",required:!1,type:{name:"string | undefined"}},gap:{defaultValue:null,description:`The space between each cell
This can be descibed as a single cell or as [column, row] spacing. This will help with having matching spacing when laying out shapes with an irregular aspect ratio`,name:"gap",required:!1,type:{name:"CSSNumeric | [CSSNumeric, CSSNumeric] | undefined"}},layout:{defaultValue:{value:"i=>[i%columns, Math.floor(i/columns), '']"},description:"The layout function is used create a custom layout. if every cell is reliant on a single pathID the last argument in ShapelyGridLayoutFN tuple can be comitted.",name:"layout",required:!1,type:{name:"ShapelyGridLayoutFn | undefined"}},pathID:{defaultValue:null,description:"This property provides an id to a cached shape",name:"pathID",required:!1,type:{name:"string | undefined"}},row:{defaultValue:null,description:"A pattern to be used in the row auto property",name:"row",required:!1,type:{name:"string | undefined"}},shadow:{defaultValue:null,description:"",name:"shadow",required:!1,type:{name:"string | undefined"}}}}}catch{}export{W as S};