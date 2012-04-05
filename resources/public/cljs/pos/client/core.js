goog.provide('pos.client.core');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('noir.cljs.client.watcher');
goog.require('clojure.browser.repl');
goog.require('pos.client.controller');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
pos.client.core.$content = jayq.core.$.call(null,"\uFDD0'#content");
jayq.core.document_ready.call(null,(function (){
return pos.client.controller.init.call(null);
}));
