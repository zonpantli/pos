goog.provide('pos.client.core');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('noir.cljs.client.watcher');
goog.require('clojure.browser.repl');
goog.require('pos.client.controller');
jayq.core.document_ready.call(null,(function (){
return pos.client.controller.init.call(null);
}));
