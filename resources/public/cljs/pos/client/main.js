goog.provide('pos.client.main');
goog.require('cljs.core');
goog.require('pos.client.util');
goog.require('fetch.util');
goog.require('jayq.core');
goog.require('noir.cljs.client.watcher');
goog.require('clojure.browser.repl');
goog.require('crate.core');
goog.require('fetch.remotes');
goog.require('lib.dispatch');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
pos.client.main.$content = jayq.core.$.call(null,"\uFDD0'#content");
pos.client.main._STAR_data_STAR_ = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'foo"],{"\uFDD0'foo":"bar"}));
/**
* Fetch inventory and user data
*/
pos.client.main.fetch_client_data = (function fetch_client_data(){
return fetch.remotes.remote_callback.call(null,"get-db",cljs.core.PersistentVector.fromArray([]),(function (res){
cljs.core.swap_BANG_.call(null,pos.client.main._STAR_data_STAR_,cljs.core.merge,res);
return lib.dispatch.fire.call(null,"\uFDD0'init-data-done");
}));
});
pos.client.main.get_dropdown_data = (function get_dropdown_data(data_key,data){
return cljs.core.map.call(null,(function (p1__7147_SHARP_){
return cljs.core.merge.call(null,p1__7147_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":"\uFDD0'name".call(null,p1__7147_SHARP_)}));
}),data_key.call(null,data));
});
/**
* Attach data to typeahead fields for customer and item selcetion
*/
pos.client.main.prepare_typeaheads = (function prepare_typeaheads(data){
pos.client.util.log.call(null,"preparing typeaheads");
jayq.core.$.call(null,"\uFDD0'#customer-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source"],{"\uFDD0'source":pos.client.main.get_dropdown_data.call(null,"\uFDD0'customers",data)})));
return jayq.core.$.call(null,"\uFDD0'#item-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source"],{"\uFDD0'source":pos.client.main.get_dropdown_data.call(null,"\uFDD0'items",data)})));
});
pos.client.main.set_customer = (function set_customer(id){
return alert.call(null,cljs.core.str.call(null,"Customer set - id: ",id.data));
});
pos.client.main.bind_pusher_listener = (function bind_pusher_listener(){
var pusher__7148 = (new Pusher("a32696b95bcc47185377"));
var channel__7149 = pusher__7148.subscribe("kovalo-pos");

return channel__7149.bind("customer-nfc",pos.client.main.set_customer);
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'init-data-done"]),(function (t,d){
return pos.client.main.prepare_typeaheads.call(null,cljs.core.deref.call(null,pos.client.main._STAR_data_STAR_));
}));
jayq.core.document_ready.call(null,(function (){
pos.client.main.fetch_client_data.call(null);
return pos.client.main.bind_pusher_listener.call(null);
}));
