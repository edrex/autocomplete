SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "app/": "src/"
  },
  browserConfig: {
    "baseURL": "/",
    "bundles": {
      "build.js": [
        "app/app.js",
        "app/Suggestions.js",
        "app/UserSuggestion.js",
        "npm:classnames@2.2.5/index.js",
        "npm:classnames@2.2.5.json",
        "npm:react@15.1.0/react.js",
        "npm:react@15.1.0.json",
        "github:jspm/nodelibs-process@0.2.0-alpha/process.js",
        "github:jspm/nodelibs-process@0.2.0-alpha.json",
        "npm:react@15.1.0/lib/React.js",
        "npm:fbjs@0.8.3/lib/warning.js",
        "npm:fbjs@0.8.3.json",
        "npm:fbjs@0.8.3/lib/emptyFunction.js",
        "npm:react@15.1.0/lib/onlyChild.js",
        "npm:fbjs@0.8.3/lib/invariant.js",
        "npm:react@15.1.0/lib/ReactElement.js",
        "npm:react@15.1.0/lib/canDefineProperty.js",
        "npm:react@15.1.0/lib/ReactCurrentOwner.js",
        "npm:object-assign@4.1.0/index.js",
        "npm:object-assign@4.1.0.json",
        "npm:react@15.1.0/lib/ReactVersion.js",
        "npm:react@15.1.0/lib/ReactPropTypes.js",
        "npm:react@15.1.0/lib/getIteratorFn.js",
        "npm:react@15.1.0/lib/ReactPropTypeLocationNames.js",
        "npm:react@15.1.0/lib/ReactElementValidator.js",
        "npm:react@15.1.0/lib/ReactPropTypeLocations.js",
        "npm:fbjs@0.8.3/lib/keyMirror.js",
        "npm:react@15.1.0/lib/ReactDOMFactories.js",
        "npm:fbjs@0.8.3/lib/mapObject.js",
        "npm:react@15.1.0/lib/ReactClass.js",
        "npm:fbjs@0.8.3/lib/keyOf.js",
        "npm:fbjs@0.8.3/lib/emptyObject.js",
        "npm:react@15.1.0/lib/ReactNoopUpdateQueue.js",
        "npm:react@15.1.0/lib/ReactComponent.js",
        "npm:react@15.1.0/lib/ReactInstrumentation.js",
        "npm:react@15.1.0/lib/ReactDebugTool.js",
        "npm:react@15.1.0/lib/ReactComponentTreeDevtool.js",
        "npm:react@15.1.0/lib/ReactNativeOperationHistoryDevtool.js",
        "npm:react@15.1.0/lib/ReactInvalidSetStateWarningDevTool.js",
        "npm:fbjs@0.8.3/lib/performanceNow.js",
        "npm:fbjs@0.8.3/lib/performance.js",
        "npm:fbjs@0.8.3/lib/ExecutionEnvironment.js",
        "npm:react@15.1.0/lib/ReactChildren.js",
        "npm:react@15.1.0/lib/traverseAllChildren.js",
        "npm:react@15.1.0/lib/KeyEscapeUtils.js",
        "npm:react@15.1.0/lib/PooledClass.js",
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/inherits.js",
        "npm:systemjs-plugin-babel@0.0.12.json",
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/possibleConstructorReturn.js",
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/createClass.js",
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/classCallCheck.js",
        "app/TextAreaAutocompleter.js",
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/toConsumableArray.js",
        "npm:react-dom@15.1.0/index.js",
        "npm:react-dom@15.1.0.json",
        "npm:react@15.1.0/lib/ReactDOM.js",
        "npm:react@15.1.0/lib/renderSubtreeIntoContainer.js",
        "npm:react@15.1.0/lib/ReactMount.js",
        "npm:react@15.1.0/lib/shouldUpdateReactComponent.js",
        "npm:react@15.1.0/lib/setInnerHTML.js",
        "npm:react@15.1.0/lib/createMicrosoftUnsafeLocalFunction.js",
        "npm:react@15.1.0/lib/instantiateReactComponent.js",
        "npm:react@15.1.0/lib/ReactNativeComponent.js",
        "npm:react@15.1.0/lib/ReactEmptyComponent.js",
        "npm:react@15.1.0/lib/ReactCompositeComponent.js",
        "npm:react@15.1.0/lib/ReactUpdateQueue.js",
        "npm:react@15.1.0/lib/ReactUpdates.js",
        "npm:react@15.1.0/lib/Transaction.js",
        "npm:react@15.1.0/lib/ReactReconciler.js",
        "npm:react@15.1.0/lib/ReactRef.js",
        "npm:react@15.1.0/lib/ReactOwner.js",
        "npm:react@15.1.0/lib/ReactFeatureFlags.js",
        "npm:react@15.1.0/lib/CallbackQueue.js",
        "npm:react@15.1.0/lib/ReactInstanceMap.js",
        "npm:react@15.1.0/lib/ReactNodeTypes.js",
        "npm:react@15.1.0/lib/ReactErrorUtils.js",
        "npm:react@15.1.0/lib/ReactComponentEnvironment.js",
        "npm:react@15.1.0/lib/ReactMarkupChecksum.js",
        "npm:react@15.1.0/lib/adler32.js",
        "npm:react@15.1.0/lib/ReactDOMFeatureFlags.js",
        "npm:react@15.1.0/lib/ReactDOMContainerInfo.js",
        "npm:react@15.1.0/lib/validateDOMNesting.js",
        "npm:react@15.1.0/lib/ReactDOMComponentTree.js",
        "npm:react@15.1.0/lib/ReactDOMComponentFlags.js",
        "npm:react@15.1.0/lib/DOMProperty.js",
        "npm:react@15.1.0/lib/ReactBrowserEventEmitter.js",
        "npm:react@15.1.0/lib/isEventSupported.js",
        "npm:react@15.1.0/lib/getVendorPrefixedEventName.js",
        "npm:react@15.1.0/lib/ViewportMetrics.js",
        "npm:react@15.1.0/lib/ReactEventEmitterMixin.js",
        "npm:react@15.1.0/lib/EventPluginHub.js",
        "npm:react@15.1.0/lib/forEachAccumulated.js",
        "npm:react@15.1.0/lib/accumulateInto.js",
        "npm:react@15.1.0/lib/EventPluginUtils.js",
        "npm:react@15.1.0/lib/EventConstants.js",
        "npm:react@15.1.0/lib/EventPluginRegistry.js",
        "npm:react@15.1.0/lib/DOMLazyTree.js",
        "npm:react@15.1.0/lib/setTextContent.js",
        "npm:react@15.1.0/lib/escapeTextContentForBrowser.js",
        "npm:react@15.1.0/lib/DOMNamespaces.js",
        "npm:react@15.1.0/lib/getNativeComponentFromComposite.js",
        "npm:react@15.1.0/lib/findDOMNode.js",
        "npm:react@15.1.0/lib/ReactDefaultInjection.js",
        "npm:react@15.1.0/lib/SimpleEventPlugin.js",
        "npm:react@15.1.0/lib/getEventCharCode.js",
        "npm:react@15.1.0/lib/SyntheticWheelEvent.js",
        "npm:react@15.1.0/lib/SyntheticMouseEvent.js",
        "npm:react@15.1.0/lib/getEventModifierState.js",
        "npm:react@15.1.0/lib/SyntheticUIEvent.js",
        "npm:react@15.1.0/lib/getEventTarget.js",
        "npm:react@15.1.0/lib/SyntheticEvent.js",
        "npm:react@15.1.0/lib/SyntheticTransitionEvent.js",
        "npm:react@15.1.0/lib/SyntheticTouchEvent.js",
        "npm:react@15.1.0/lib/SyntheticDragEvent.js",
        "npm:react@15.1.0/lib/SyntheticKeyboardEvent.js",
        "npm:react@15.1.0/lib/getEventKey.js",
        "npm:react@15.1.0/lib/SyntheticFocusEvent.js",
        "npm:react@15.1.0/lib/SyntheticClipboardEvent.js",
        "npm:react@15.1.0/lib/SyntheticAnimationEvent.js",
        "npm:react@15.1.0/lib/EventPropagators.js",
        "npm:fbjs@0.8.3/lib/EventListener.js",
        "npm:react@15.1.0/lib/SelectEventPlugin.js",
        "npm:fbjs@0.8.3/lib/shallowEqual.js",
        "npm:react@15.1.0/lib/isTextInputElement.js",
        "npm:fbjs@0.8.3/lib/getActiveElement.js",
        "npm:react@15.1.0/lib/ReactInputSelection.js",
        "npm:fbjs@0.8.3/lib/focusNode.js",
        "npm:fbjs@0.8.3/lib/containsNode.js",
        "npm:fbjs@0.8.3/lib/isTextNode.js",
        "npm:fbjs@0.8.3/lib/isNode.js",
        "npm:react@15.1.0/lib/ReactDOMSelection.js",
        "npm:react@15.1.0/lib/getTextContentAccessor.js",
        "npm:react@15.1.0/lib/getNodeForCharacterOffset.js",
        "npm:react@15.1.0/lib/SVGDOMPropertyConfig.js",
        "npm:react@15.1.0/lib/ReactReconcileTransaction.js",
        "npm:react@15.1.0/lib/ReactInjection.js",
        "npm:react@15.1.0/lib/ReactEventListener.js",
        "npm:fbjs@0.8.3/lib/getUnboundedScrollPosition.js",
        "npm:react@15.1.0/lib/ReactDefaultBatchingStrategy.js",
        "npm:react@15.1.0/lib/ReactDOMTextComponent.js",
        "npm:react@15.1.0/lib/DOMChildrenOperations.js",
        "npm:react@15.1.0/lib/ReactMultiChildUpdateTypes.js",
        "npm:react@15.1.0/lib/Danger.js",
        "npm:fbjs@0.8.3/lib/getMarkupWrap.js",
        "npm:fbjs@0.8.3/lib/createNodesFromMarkup.js",
        "npm:fbjs@0.8.3/lib/createArrayFromMixed.js",
        "npm:react@15.1.0/lib/ReactDOMTreeTraversal.js",
        "npm:react@15.1.0/lib/ReactDOMEmptyComponent.js",
        "npm:react@15.1.0/lib/ReactDOMComponent.js",
        "npm:react@15.1.0/lib/ReactServerRenderingTransaction.js",
        "npm:react@15.1.0/lib/ReactMultiChild.js",
        "npm:react@15.1.0/lib/flattenChildren.js",
        "npm:react@15.1.0/lib/ReactChildReconciler.js",
        "npm:react@15.1.0/lib/ReactDOMTextarea.js",
        "npm:react@15.1.0/lib/LinkedValueUtils.js",
        "npm:react@15.1.0/lib/DOMPropertyOperations.js",
        "npm:react@15.1.0/lib/quoteAttributeValueForBrowser.js",
        "npm:react@15.1.0/lib/ReactDOMInstrumentation.js",
        "npm:react@15.1.0/lib/ReactDOMDebugTool.js",
        "npm:react@15.1.0/lib/ReactDOMUnknownPropertyDevtool.js",
        "npm:react@15.1.0/lib/DisabledInputUtils.js",
        "npm:react@15.1.0/lib/ReactDOMSelect.js",
        "npm:react@15.1.0/lib/ReactDOMOption.js",
        "npm:react@15.1.0/lib/ReactDOMInput.js",
        "npm:react@15.1.0/lib/ReactDOMButton.js",
        "npm:react@15.1.0/lib/ReactComponentBrowserEnvironment.js",
        "npm:react@15.1.0/lib/ReactDOMIDOperations.js",
        "npm:react@15.1.0/lib/CSSPropertyOperations.js",
        "npm:fbjs@0.8.3/lib/memoizeStringOnly.js",
        "npm:fbjs@0.8.3/lib/hyphenateStyleName.js",
        "npm:fbjs@0.8.3/lib/hyphenate.js",
        "npm:react@15.1.0/lib/dangerousStyleValue.js",
        "npm:react@15.1.0/lib/CSSProperty.js",
        "npm:fbjs@0.8.3/lib/camelizeStyleName.js",
        "npm:fbjs@0.8.3/lib/camelize.js",
        "npm:react@15.1.0/lib/AutoFocusUtils.js",
        "npm:react@15.1.0/lib/HTMLDOMPropertyConfig.js",
        "npm:react@15.1.0/lib/EnterLeaveEventPlugin.js",
        "npm:react@15.1.0/lib/DefaultEventPluginOrder.js",
        "npm:react@15.1.0/lib/ChangeEventPlugin.js",
        "npm:react@15.1.0/lib/BeforeInputEventPlugin.js",
        "npm:react@15.1.0/lib/SyntheticInputEvent.js",
        "npm:react@15.1.0/lib/SyntheticCompositionEvent.js",
        "npm:react@15.1.0/lib/FallbackCompositionState.js"
      ]
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12",
      "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.8.0",
      "core-js": "npm:core-js@2.4.0"
    },
    "packages": {
      "npm:babel-plugin-transform-react-jsx@6.8.0": {
        "map": {
          "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.8.0",
          "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.9.0",
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-syntax-jsx@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-helper-builder-react-jsx@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "esutils": "npm:esutils@2.0.2",
          "babel-types": "npm:babel-types@6.10.2",
          "lodash": "npm:lodash@4.13.1"
        }
      },
      "npm:babel-runtime@6.9.2": {
        "map": {
          "core-js": "npm:core-js@2.4.0",
          "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
        }
      },
      "npm:babel-types@6.10.2": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "esutils": "npm:esutils@2.0.2",
          "lodash": "npm:lodash@4.13.1",
          "babel-traverse": "npm:babel-traverse@6.10.4",
          "to-fast-properties": "npm:to-fast-properties@1.0.2"
        }
      },
      "npm:babel-traverse@6.10.4": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.2",
          "lodash": "npm:lodash@4.13.1",
          "invariant": "npm:invariant@2.2.1",
          "debug": "npm:debug@2.2.0",
          "babel-messages": "npm:babel-messages@6.8.0",
          "globals": "npm:globals@8.18.0",
          "babylon": "npm:babylon@6.8.1",
          "babel-code-frame": "npm:babel-code-frame@6.8.0"
        }
      },
      "npm:babel-messages@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babylon@6.8.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:invariant@2.2.1": {
        "map": {
          "loose-envify": "npm:loose-envify@1.2.0"
        }
      },
      "npm:debug@2.2.0": {
        "map": {
          "ms": "npm:ms@0.7.1"
        }
      },
      "npm:babel-code-frame@6.8.0": {
        "map": {
          "esutils": "npm:esutils@2.0.2",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "js-tokens": "npm:js-tokens@1.0.3",
          "chalk": "npm:chalk@1.1.3"
        }
      },
      "npm:chalk@1.1.3": {
        "map": {
          "ansi-styles": "npm:ansi-styles@2.2.1",
          "supports-color": "npm:supports-color@2.0.0",
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
          "has-ansi": "npm:has-ansi@2.0.0",
          "strip-ansi": "npm:strip-ansi@3.0.1"
        }
      },
      "npm:has-ansi@2.0.0": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.0.0"
        }
      },
      "npm:strip-ansi@3.0.1": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.0.0"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "app": {
      "main": "app.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel",
          "babelOptions": {
            "plugins": [
              "babel-plugin-transform-react-jsx"
            ]
          }
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "classnames": "npm:classnames@2.2.5",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fetch": "github:github/fetch@1.0.0",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "react": "npm:react@15.1.0",
    "react-dom": "npm:react-dom@15.1.0",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
  },
  packages: {
    "npm:react@15.1.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0",
        "fbjs": "npm:fbjs@0.8.3",
        "object-assign": "npm:object-assign@4.1.0"
      }
    },
    "npm:fbjs@0.8.3": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0",
        "object-assign": "npm:object-assign@4.1.0",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "promise": "npm:promise@7.1.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.10",
        "immutable": "npm:immutable@3.8.1",
        "core-js": "npm:core-js@1.2.6"
      }
    },
    "npm:loose-envify@1.2.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "node-fetch": "npm:node-fetch@1.5.3",
        "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.4"
      }
    },
    "npm:node-fetch@1.5.3": {
      "map": {
        "is-stream": "npm:is-stream@1.1.0",
        "encoding": "npm:encoding@0.1.12"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.13"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.4"
      }
    },
    "npm:readable-stream@2.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "string_decoder": "npm:string_decoder@0.10.31",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7"
      }
    },
    "github:jspm/nodelibs-domain@0.2.0-alpha": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.6.0"
      }
    },
    "npm:buffer@4.6.0": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "ieee754": "npm:ieee754@1.1.6",
        "base64-js": "npm:base64-js@1.1.2"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.3.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.4",
        "pako": "npm:pako@0.2.8"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:stream-http@2.3.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.4",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-hmac": "npm:create-hmac@1.1.4",
        "create-hash": "npm:create-hash@1.1.2",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "randombytes": "npm:randombytes@2.0.3",
        "public-encrypt": "npm:public-encrypt@4.0.0"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.2",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "elliptic": "npm:elliptic@6.3.1",
        "bn.js": "npm:bn.js@4.11.4"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.4"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "bn.js": "npm:bn.js@4.11.4"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.2",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "cipher-base": "npm:cipher-base@1.0.2",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.4"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "asn1.js": "npm:asn1.js@4.6.2"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.3.1",
        "bn.js": "npm:bn.js@4.11.4"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.4",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:elliptic@6.3.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "bn.js": "npm:bn.js@4.11.4",
        "brorand": "npm:brorand@1.0.5",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:asn1.js@4.6.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "bn.js": "npm:bn.js@4.11.4",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    }
  }
});
