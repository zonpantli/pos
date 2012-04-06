goog.provide('pos.client.controller');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('fetch.util');
goog.require('fetch.remotes');
goog.require('lib.dispatch');
goog.require('pos.client.model');
goog.require('pos.client.view');
/**
* Fetch inventory and user data
*/
pos.client.controller.fetch_client_data = (function fetch_client_data(){
return fetch.remotes.remote_callback.call(null,"get-db",cljs.core.PersistentVector.fromArray([]),(function (res){
cljs.core.swap_BANG_.call(null,pos.client.model.data,cljs.core.merge,res);
return lib.dispatch.fire.call(null,"\uFDD0'init-data-done");
}));
});
pos.client.controller.bind_pusher_listener = (function bind_pusher_listener(){
var pusher__7571 = (new Pusher("a32696b95bcc47185377"));
var channel__7572 = pusher__7571.subscribe("kovalo-pos");

return channel__7572.bind("customer-nfc",(function (p1__7570_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'pusher-customer-nfc",p1__7570_SHARP_);
}));
});
pos.client.controller.init = (function init(){
pos.client.controller.fetch_client_data.call(null);
pos.client.controller.bind_pusher_listener.call(null);
return pos.client.view.prepare_ui.call(null);
});
