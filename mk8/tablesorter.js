(function(d){d.fn.stupidtable=function(b){return this.each(function(){var a=d(this);b=b||{};b=d.extend({},d.fn.stupidtable.default_sort_fns,b);a.on("click.stupidtable","thead th",function(){var c=d(this),f=0,g=d.fn.stupidtable.dir;c.parents("tr").find("th").slice(0,c.index()).each(function(){var a=d(this).attr("colspan")||1;f+=parseInt(a,10)});var e=c.data("sort-default")||g.ASC;c.data("sort-dir")&&(e=c.data("sort-dir")===g.ASC?g.DESC:g.ASC);var l=c.data("sort")||null;null!==l&&(a.trigger("beforetablesort", {column:f,direction:e}),a.css("display"),setTimeout(function(){var h=[],m=b[l],k=a.children("tbody").children("tr");k.each(function(a,b){var c=d(b).children().eq(f),e=c.data("sort-value"),c="undefined"!==typeof e?e:c.text();h.push([c,b])});h.sort(function(a,b){return m(a[0],b[0])});e!=g.ASC&&h.reverse();k=d.map(h,function(a){return a[1]});a.children("tbody").append(k);a.find("th").data("sort-dir",null).removeClass("sorting-desc sorting-asc");c.data("sort-dir",e).addClass("sorting-"+e);a.trigger("aftertablesort", {column:f,direction:e});a.css("display")},10))})})};d.fn.stupidtable.dir={ASC:"asc",DESC:"desc"};d.fn.stupidtable.default_sort_fns={"int":function(b,a){return parseInt(b,10)-parseInt(a,10)},"float":function(b,a){return parseFloat(b)-parseFloat(a)},string:function(b,a){return b<a?-1:b>a?1:0},"string-ins":function(b,a){b=b.toLowerCase();a=a.toLowerCase();return b<a?-1:b>a?1:0}}})(jQuery);