// Raw clabbrItems array. Add data here.
const rawClabbrs = [
  {
    name: "section",
    abbreviation: "sxn"
  },
  {
    name: "button",
    abbreviation: "btn"
  },
  {
    name: "link",
    abbreviation: "lnk"
  },
  {
    name: "anchor",
    abbreviation: "anc"
  },
  {
    name: "navigation",
    abbreviation: "nav"
  },
  {
    name: "image",
    abbreviation: "img"
  },
  {
    name: "card",
    abbreviation: "crd"
  },
  {
    name: "menu",
    abbreviation: "mnu"
  },
  {
    name: "avatar",
    abbreviation: "avt"
  },
  {
    name: "figure",
    abbreviation: "fig"
  },
  {
    name: "media",
    abbreviation: "mda"
  },
  {
    name: "address",
    abbreviation: "adr"
  },
  {
    name: "post",
    abbreviation: "pst"
  },
  {
    name: "form",
    abbreviation: "frm"
  },
  {
    name: "input",
    abbreviation: "inp"
  },
  {
    name: "title",
    abbreviation: "ttl"
  },
  {
    name: "article",
    abbreviation: "art"
  },
  {
    name: "sidebar",
    abbreviation: "sbr"
  },
  {
    name: "header",
    abbreviation: "hdr"
  },
  {
    name: "footer",
    abbreviation: "ftr"
  },
  {
    name: "quote",
    abbreviation: "qte"
  },
  {
    name: "caption",
    abbreviation: "cpt"
  },
  {
    name: "ordered",
    abbreviation: "ord"
  },
  {
    name: "unordered",
    abbreviation: "urd"
  },
  {
    name: "canvas",
    abbreviation: "cvs"
  },
  {
    name: "object",
    abbreviation: "obj"
  },
  {
    name: "ajax",
    abbreviation: "ajx"
  },
  {
    name: "loader",
    abbreviation: "ldr"
  },
  {
    name: "separator",
    abbreviation: "sep"
  },
  {
    name: "social",
    abbreviation: "soc"
  },
  {
    name: "share",
    abbreviation: "shr"
  },
  {
    name: "category",
    abbreviation: "cat"
  },
  {
    name: "tag",
    abbreviation: "tag"
  },
  {
    name: "triangle",
    abbreviation: "tri"
  },
  {
    name: "square",
    abbreviation: "sqr"
  },
  {
    name: "circle",
    abbreviation: "cir"
  },
  {
    name: "inline",
    abbreviation: "inl"
  },
  {
    name: "page",
    abbreviation: "pag"
  },
  {
    name: "front",
    abbreviation: "frt"
  },
  {
    name: "container",
    abbreviation: "ctr"
  },
  {
    name: "source",
    abbreviation: "src"
  },
  {
    name: "destination",
    abbreviation: "dst"
  },
  {
    name: "event",
    abbreviation: "evt"
  },
  {
    name: "tab",
    abbreviation: "tab"
  },
  {
    name: "accordion",
    abbreviation: "acc"
  },
  {
    name: "account",
    abbreviation: "act"
  },
  {
    name: "audio",
    abbreviation: "aud"
  },
  {
    name: "video",
    abbreviation: "vid"
  },
  {
    name: "blog",
    abbreviation: "blg"
  },
  {
    name: "calendar",
    abbreviation: "cal"
  },
  {
    name: "breadcrumb",
    abbreviation: "brc"
  },
  {
    name: "select",
    abbreviation: "sel"
  },
  {
    name: "comment",
    abbreviation: "cmt"
  },
  {
    name: "modal",
    abbreviation: "mdl"
  },
  {
    name: "illustration",
    abbreviation: "ilu"
  },
  {
    name: "gallery",
    abbreviation: "gal"
  },
  {
    name: "contact",
    abbreviation: "cnt"
  },
  {
    name: "tooltip",
    abbreviation: "ttp"
  },
  {
    name: "hero",
    abbreviation: "hro"
  },
  {
    name: "filter",
    abbreviation: "flt"
  },
  {
    name: "slider",
    abbreviation: "slr"
  },
  {
    name: "notification",
    abbreviation: "ntf"
  },
  {
    name: "error",
    abbreviation: "err"
  },
  {
    name: "warning",
    abbreviation: "wrn"
  },
  {
    name: "success",
    abbreviation: "scs"
  },
  {
    name: "thumbnail",
    abbreviation: "tbn"
  },
  {
    name: "bar",
    abbreviation: "bar"
  },
  {
    name: "dropdown",
    abbreviation: "drd"
  },
  {
    name: "player",
    abbreviation: "plr"
  },
  {
    name: "play",
    abbreviation: "ply"
  },
  {
    name: "pause",
    abbreviation: "pau"
  },
  {
    name: "stop",
    abbreviation: "stp"
  },
  {
    name: "pricing",
    abbreviation: "prc"
  },
  {
    name: "detail",
    abbreviation: "dtl"
  },
  {
    name: "product",
    abbreviation: "prd"
  },
  {
    name: "project",
    abbreviation: "prj"
  },
  {
    name: "search",
    abbreviation: "ser"
  },
  {
    name: "service",
    abbreviation: "svc"
  },
  {
    name: "login",
    abbreviation: "lgn"
  },
  {
    name: "logout",
    abbreviation: "lgt"
  },
  {
    name: "user",
    abbreviation: "usr"
  },
  {
    name: "single",
    abbreviation: "sgl"
  },
  {
    name: "set",
    abbreviation: "set"
  },
  {
    name: "setting",
    abbreviation: "stn"
  },
  {
    name: "information",
    abbreviation: "inf"
  },
  {
    name: "profile",
    abbreviation: "prf"
  },
  {
    name: "cart",
    abbreviation: "crt"
  },
  {
    name: "checkout",
    abbreviation: "ckt"
  },
  {
    name: "result",
    abbreviation: "rst"
  },
  {
    name: "map",
    abbreviation: "map"
  },
  {
    name: "streamer",
    abbreviation: "stm"
  },
  {
    name: "overlay",
    abbreviation: "ovl"
  },
  {
    name: "logo",
    abbreviation: "lgo"
  },
  {
    name: "member",
    abbreviation: "mbr"
  },
  {
    name: "lead",
    abbreviation: "led"
  },
  {
    name: "masonry",
    abbreviation: "msr"
  },
  {
    name: "about",
    abbreviation: "abt"
  },
  {
    name: "panel",
    abbreviation: "pnl"
  },
  {
    name: "bundle",
    abbreviation: "bdl"
  },
  {
    name: "production",
    abbreviation: "prn"
  },
  {
    name: "assets",
    abbreviation: "ast"
  },
  {
    name: "style",
    abbreviation: "stl"
  },
  {
    name: "center",
    abbreviation: "cen"
  },
  {
    name: "name",
    abbreviation: "nom"
  },
  {
    name: "abbreviation",
    abbreviation: "abr"
  },
  {
    name: "fixed",
    abbreviation: "fxd"
  },
  {
    name: "auto",
    abbreviation: "aut"
  },
  {
    name: "hover",
    abbreviation: "hvr"
  },
  {
    name: "active",
    abbreviation: "atv"
  },
  {
    name: "focus",
    abbreviation: "fcs"
  },
  {
    name: "primary",
    abbreviation: "pri"
  },
  {
    name: "secondary",
    abbreviation: "sec"
  },
  {
    name: "tertiary",
    abbreviation: "ter"
  },
  {
    name: "breakpoint",
    abbreviation: "brp"
  },
  {
    name: "mobile",
    abbreviation: "mob"
  },
  {
    name: "phone",
    abbreviation: "pho"
  },
  {
    name: "tablet",
    abbreviation: "tbt"
  },
  {
    name: "laptop",
    abbreviation: "ltp"
  },
  {
    name: "desktop",
    abbreviation: "dtp"
  },
  {
    name: "display",
    abbreviation: "dis"
  },
  {
    name: "flex",
    abbreviation: "flx"
  },
  {
    name: "vertical",
    abbreviation: "vtl"
  },
  {
    name: "horizontal",
    abbreviation: "hzl"
  },
  {
    name: "diagonal",
    abbreviation: "dgl"
  },
  {
    name: "align",
    abbreviation: "aln"
  },
  {
    name: "z-index",
    abbreviation: "zix"
  },
  {
    name: "transform",
    abbreviation: "trf"
  },
  {
    name: "width",
    abbreviation: "wdt"
  },
  {
    name: "height",
    abbreviation: "hgt"
  },
  {
    name: "line",
    abbreviation: "lin"
  },
  {
    name: "content",
    abbreviation: "con"
  },
  {
    name: "position",
    abbreviation: "pos"
  },
  {
    name: "float",
    abbreviation: "flo"
  },
  {
    name: "clear",
    abbreviation: "cle"
  },
  {
    name: "border",
    abbreviation: "bdr"
  },
  {
    name: "collapse",
    abbreviation: "clp"
  },
  {
    name: "table",
    abbreviation: "tbl"
  },
  {
    name: "layout",
    abbreviation: "lyt"
  },
  {
    name: "list",
    abbreviation: "lst"
  },
  {
    name: "counter",
    abbreviation: "cot"
  },
  {
    name: "margin",
    abbreviation: "mar"
  },
  {
    name: "padding",
    abbreviation: "pad"
  },
  {
    name: "background",
    abbreviation: "bkg"
  },
  {
    name: "repeat",
    abbreviation: "rpt"
  },
  {
    name: "radius",
    abbreviation: "rad"
  },
  {
    name: "round",
    abbreviation: "rnd"
  },
  {
    name: "box",
    abbreviation: "box"
  },
  {
    name: "shadow",
    abbreviation: "shw"
  },
  {
    name: "outline",
    abbreviation: "otl"
  },
  {
    name: "font",
    abbreviation: "fnt"
  },
  {
    name: "family",
    abbreviation: "fam"
  },
  {
    name: "size",
    abbreviation: "siz"
  },
  {
    name: "text",
    abbreviation: "txt"
  },
  {
    name: "justify",
    abbreviation: "jfy"
  },
  {
    name: "letter",
    abbreviation: "ltr"
  },
  {
    name: "space",
    abbreviation: "spc"
  },
  {
    name: "word",
    abbreviation: "wrd"
  },
  {
    name: "wrap",
    abbreviation: "wrp"
  },
  {
    name: "color",
    abbreviation: "clr"
  },
  {
    name: "transition",
    abbreviation: "trs"
  },
  {
    name: "animation",
    abbreviation: "ani"
  },
  {
    name: "bold",
    abbreviation: "bld"
  },
  {
    name: "italic",
    abbreviation: "itl"
  },
  {
    name: "normal",
    abbreviation: "nor"
  },
  {
    name: "grid",
    abbreviation: "grd"
  },
  {
    name: "wrapper",
    abbreviation: "wpr"
  },
  {
    name: "item",
    abbreviation: "itm"
  },
  {
    name: "row",
    abbreviation: "row"
  },
  {
    name: "column",
    abbreviation: "col"
  },
  {
    name: "top",
    abbreviation: "top"
  },
  {
    name: "bottom",
    abbreviation: "btm"
  },
  {
    name: "left",
    abbreviation: "lft"
  },
  {
    name: "right",
    abbreviation: "rit"
  },
  {
    name: "up",
    abbreviation: "up"
  },
  {
    name: "down",
    abbreviation: "dwn"
  },
  {
    name: "tiny",
    abbreviation: "tny"
  },
  {
    name: "small",
    abbreviation: "sml"
  },
  {
    name: "medium",
    abbreviation: "med"
  },
  {
    name: "large",
    abbreviation: "lrg"
  },
  {
    name: "huge",
    abbreviation: "hug"
  },
  {
    name: "giant",
    abbreviation: "gnt"
  },
  {
    name: "light",
    abbreviation: "lit"
  },
  {
    name: "dark",
    abbreviation: "drk"
  },
  {
    name: "icon",
    abbreviation: "icn"
  },
  {
    name: "next",
    abbreviation: "nxt"
  },
  {
    name: "minimum",
    abbreviation: "min"
  },
  {
    name: "maximum",
    abbreviation: "max"
  },
  {
    name: "increment",
    abbreviation: "icr"
  },
  {
    name: "decrement",
    abbreviation: "dcr"
  },
  {
    name: "decimal",
    abbreviation: "dec"
  },
  {
    name: "ascending",
    abbreviation: "asc"
  },
  {
    name: "descending",
    abbreviation: "dsc"
  },
  {
    name: "block",
    abbreviation: "blc"
  },
  {
    name: "start",
    abbreviation: "str"
  },
  {
    name: "end",
    abbreviation: "end"
  },
  {
    name: "sub",
    abbreviation: "sub"
  },
  {
    name: "sur",
    abbreviation: "sur"
  },
  {
    name: "google",
    abbreviation: "ggl"
  },
  {
    name: "facebook",
    abbreviation: "fbk"
  },
  {
    name: "twitter",
    abbreviation: "twt"
  },
  {
    name: "pinterest",
    abbreviation: "pnt"
  },
  {
    name: "snapchat",
    abbreviation: "snc"
  }
];

// Sort alphabetically and add unique key to each clabbrItem
// to create final clabbrs array.
const clabbrs =
  rawClabbrs
    .sort((a, b) => ((a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
    .map((clabbrItem, i) => {
    clabbrItem.id = i;
    return clabbrItem;
  });

export default clabbrs;
