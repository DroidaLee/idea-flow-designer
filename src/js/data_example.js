export default {
    "error_code": 0,
    "error_message": "OK",
    "data": {
        "result": {
            "content": {
                'nodes': [{
                    'node_type': 'exit',
                    'node_id': '0',
                    'description': 'Exit',
                    'warnings': [{
                        'warning_msg': '\u5b64\u7acb\u7684\u8282\u70b9\uff0c\u6ca1\u6709\u4efb\u4f55\u8fde\u7ebf\u6307\u5411\u6b64\u8282\u70b9',
                        'type': 'missing_inbound_connection'
                    }, {
                        'warning_msg': '\u7f3a\u5c11\u6307\u5411\u5916\u90e8\u7684\u8fde\u7ebf',
                        'type': 'missing_outbound_connection'
                    }]
                }, {
                    'description': '\u8ba2\u98de\u673a\u7968',
                    'warnings': [],
                    'content': {
                        'questions': [{
                            'msg': '',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'key': 'parsing_failed', 'val': true}],
                                    'function_name': 'key_val_match'
                                }]
                            }]]
                        }, {'msg': '', 'condition_rules': []}]
                    },
                    'node_type': 'entry',
                    'edges': [{
                        'to_node_id': null,
                        'condition_rules': [],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'key': 'sys_scenario_dialogue_cnt',
                            'val': 0
                        }, {
                            'operation': 'set_to_global_info',
                            'key': 'sys_node_dialogue_cnt',
                            'val': 0
                        }, {
                            'operation': 'set_to_global_info',
                            'key': 'sys_scenario_dialogue_cnt_limit',
                            'val': 5
                        }, {'operation': 'set_to_global_info', 'key': 'sys_node_dialogue_cnt_limit', 'val': 2}]
                    }, {'to_node_id': null, 'condition_rules': []}, {
                        'to_node_id': null,
                        'condition_rules': []
                    }, {
                        'to_node_id': null,
                        'condition_rules': [[{
                            'source': 'text',
                            'functions': [{
                                'content': 'from_place,to_place,depart_date',
                                'function_name': 'task_parser'
                            }]
                        }]],
                        'actions': []
                    }, {
                        'to_node_id': null,
                        'condition_rules': [[{
                            'source': 'text',
                            'functions': [{
                                'content': {'trans': 'AirlineMap_20170427145531', 'to_key': 'airline'},
                                'function_name': 'user_custom_parser'
                            }]
                        }]],
                        'actions': []
                    }, {
                        'to_node_id': '570148214576',
                        'condition_rules': [],
                        'actions': [{'operation': 'set_to_global_info', 'key': 'parsing_failed', 'val': false}]
                    }],
                    'node_id': '5284290779834',
                    'entry_condition_rules': [[{
                        'source': 'text',
                        'functions': [{'content': '\u8ba2\u98de\u673a\u7968', 'function_name': 'match'}]
                    }], [{
                        'source': 'cu',
                        'functions': [{'content': 'Intent', 'function_name': 'cu_parser'}]
                    }, {
                        'source': 'global_info',
                        'functions': [{
                            'content': [{'compare': '==', 'key': 'Intent', 'val': '\u8ba2\uff0c\u673a\u7968'}],
                            'function_name': 'key_val_match'
                        }]
                    }], [{
                        'source': 'cu',
                        'functions': [{'content': 'Intent', 'function_name': 'cu_parser'}]
                    }, {
                        'source': 'global_info',
                        'functions': [{
                            'content': [{'compare': '==', 'key': 'Intent', 'val': '\u67e5\uff0c\u673a\u7968'}],
                            'function_name': 'key_val_match'
                        }]
                    }]]
                }, {
                    'description': '\u51fa\u53d1\u65f6\u95f4',
                    'warnings': [],
                    'content': {
                        'questions': [{
                            'msg': null,
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{'content': [{'key': 'departDate'}], 'function_name': 'contain_key'}]
                            }]]
                        }, {
                            'msg': '$msg_confirm\u597d\u7684\u3002\u8bf7\u95ee\u4f60\u7684\u51fa\u53d1\u65f6\u95f4\u662f\u51e0\u6708\u51e0\u53f7\uff1f',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'val': true, 'key': 'parsing_failed'}],
                                    'function_name': 'key_val_match'
                                }]
                            }]]
                        }, {
                            'msg': '$msg_confirm\u597d\u7684\u3002\u8bf7\u95ee\u4f60\u7684\u51fa\u53d1\u65f6\u95f4\u662f\u51e0\u6708\u51e0\u53f7\uff1f',
                            'condition_rules': []
                        }]
                    },
                    'node_type': 'dialogue',
                    'edges': [{
                        'to_node_id': null,
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'departDate'}], 'function_name': 'not_contain_key'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': true,
                            'key': 'parsing_failed'
                        }, {'operation': 'update_confirm_status'}, {
                            'operation': 'set_to_global_info',
                            'val': 2,
                            'key': 'sys_node_dialogue_cnt_limit'
                        }]
                    }, {
                        'to_node_id': null,
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'departDate'}], 'function_name': 'not_contain_key'}]
                        }, {
                            'source': 'text',
                            'functions': [{
                                'content': 'multiselect-all,from_place,to_place,depart_date,arrive_date,return_date',
                                'function_name': 'task_parser'
                            }]
                        }]],
                        'actions': [{'operation': 'set_to_global_info', 'val': false, 'key': 'parsing_failed'}]
                    }, {
                        'to_node_id': '538282800447',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'compare': '<', 'val': '2', 'key': 'sys_node_dialogue_cnt'}],
                                'function_name': 'key_val_match'
                            }, {
                                'content': 'scenario_counter_rev',
                                'function_name': 'counter_check'
                            }, {'content': [{'key': 'departDate'}], 'function_name': 'not_contain_key'}]
                        }]]
                    }, {
                        'to_node_id': '349586337334',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'departDate'}], 'function_name': 'contain_key'}]
                        }, {
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'airline'}], 'function_name': 'contain_key'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': false,
                            'key': 'parsing_failed'
                        }, {'operation': 'set_to_global_info', 'val': 0, 'key': 'sys_node_dialogue_cnt'}]
                    }, {
                        'to_node_id': '077202261522770',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'departDate'}], 'function_name': 'contain_key'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': false,
                            'key': 'parsing_failed'
                        }, {'operation': 'set_to_global_info', 'val': 0, 'key': 'sys_node_dialogue_cnt'}]
                    }, {
                        'to_node_id': '0109075415165',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': 'node_counter', 'function_name': 'counter_check'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': false,
                            'key': 'parsing_failed'
                        }, {'operation': 'set_to_global_info', 'val': 0, 'key': 'sys_node_dialogue_cnt'}]
                    }, {
                        'to_node_id': '538282800447',
                        'condition_rules': [],
                        'actions': [{'operation': 'set_to_global_info', 'val': true, 'key': 'parsing_failed'}]
                    }],
                    'node_id': '538282800447',
                    'entry_condition_rules': []
                }, {
                    'default_parser_with_suffix': false,
                    'description': '\u51fa\u53d1\u57ce\u5e02',
                    'warnings': [],
                    'content': {
                        'questions': [{
                            'msg': null,
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{'content': [{'key': 'fromPlace'}], 'function_name': 'contain_key'}]
                            }]],
                            'question_type': 'skip_response'
                        }, {
                            'msg': '$msg_confirm\u597d\u7684\u3002\u8bf7\u95ee\u4f60\u7684\u51fa\u53d1\u57ce\u5e02\u662f\u54ea\u91cc\uff1f',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'val': true, 'key': 'parsing_failed'}],
                                    'function_name': 'key_val_match'
                                }]
                            }]],
                            'question_type': 'failure_response'
                        }, {
                            'msg': '$msg_confirm\u597d\u7684\u3002\u8bf7\u95ee\u4f60\u7684\u51fa\u53d1\u57ce\u5e02\u662f\u54ea\u91cc\uff1f',
                            'condition_rules': [],
                            'question_type': 'initial_response'
                        }]
                    },
                    'global_vars': ['fromPlace_115011205620527', 'toPlace_115011205620527', 'departDate_115011205620527', 'arriveDate_115011205620527', 'returnDate_115011205620527', 'fromPlaceCode'],
                    'node_type': 'dialogue',
                    'edges': [{
                        'to_node_id': null,
                        'edge_type': 'hidden',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'fromPlace'}], 'function_name': 'not_contain_key'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': true,
                            'key': 'parsing_failed'
                        }, {'operation': 'update_confirm_status'}, {
                            'operation': 'set_to_global_info',
                            'val': 2,
                            'key': 'sys_node_dialogue_cnt_limit'
                        }]
                    }, {
                        'to_node_id': null,
                        'edge_type': 'hidden',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'fromPlace'}], 'function_name': 'not_contain_key'}]
                        }, {
                            'source': 'text',
                            'functions': [{
                                'content': {
                                    'key_suffix': '_115011205620527',
                                    'tags': 'multiselect-all,from_place,to_place,depart_date,arrive_date,return_date'
                                }, 'function_name': 'task_parser'
                            }]
                        }]],
                        'actions': [{'operation': 'set_to_global_info', 'val': false, 'key': 'parsing_failed'}]
                    }, {
                        'to_node_id': '115011205620527',
                        'edge_type': 'hidden',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'compare': '<', 'val': 2, 'key': 'sys_node_dialogue_cnt'}],
                                'function_name': 'key_val_match'
                            }, {
                                'content': 'scenario_counter_rev',
                                'function_name': 'counter_check'
                            }, {'content': [{'key': 'fromPlace'}], 'function_name': 'not_contain_key'}]
                        }]]
                    }, {
                        'to_node_id': '1963875239115',
                        'edge_type': 'normal',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'fromPlace'}], 'function_name': 'contain_key'}]
                        }, {
                            'source': 'global_info',
                            'functions': [{
                                'content': {
                                    'trans': 'PlaceMap_20180115164253',
                                    'from_key': 'fromPlace',
                                    'to_key': 'fromPlaceCode'
                                }, 'function_name': 'user_custom_transform'
                            }]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': false,
                            'key': 'parsing_failed'
                        }, {'operation': 'set_to_global_info', 'val': 0, 'key': 'sys_node_dialogue_cnt'}]
                    }, {
                        'to_node_id': '2977183271008',
                        'edge_type': 'normal',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'fromPlace'}], 'function_name': 'contain_key'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': false,
                            'key': 'parsing_failed'
                        }, {'operation': 'set_to_global_info', 'val': 0, 'key': 'sys_node_dialogue_cnt'}]
                    }, {
                        'to_node_id': '0109075415165',
                        'edge_type': 'normal',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': 'node_counter',
                                'content_text_array': ['\u82e5\u8d85\u8fc7\u8282\u70b9\u5bf9\u8bdd\u8f6e\u6570\u9650\u5236'],
                                'function_name': 'counter_check'
                            }]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': false,
                            'key': 'parsing_failed'
                        }, {'operation': 'set_to_global_info', 'val': 0, 'key': 'sys_node_dialogue_cnt'}]
                    }, {
                        'to_node_id': '115011205620527',
                        'edge_type': 'else_into',
                        'condition_rules': [],
                        'actions': [{'operation': 'set_to_global_info', 'val': true, 'key': 'parsing_failed'}]
                    }],
                    'node_id': '115011205620527',
                    'entry_condition_rules': []
                }, {
                    'default_parser_with_suffix': false,
                    'description': '\u5230\u8fbe\u57ce\u5e02',
                    'warnings': [],
                    'content': {
                        'questions': [{
                            'msg': null,
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{'content': [{'key': 'toPlace'}], 'function_name': 'contain_key'}]
                            }]],
                            'question_type': 'skip_response'
                        }, {
                            'msg': '$msg_confirm\u597d\u7684\u3002\u8bf7\u95ee\u4f60\u7684\u5230\u8fbe\u57ce\u5e02\u662f\u54ea\u91cc\uff1f\u53ef\u4ee5\u8bf4\u201c\u53bb\u4e0a\u6d77\u5e02\u201d\u3002',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'val': true, 'key': 'parsing_failed'}],
                                    'function_name': 'key_val_match'
                                }]
                            }]],
                            'question_type': 'failure_response'
                        }, {
                            'msg': '$msg_confirm\u597d\u7684\u3002\u8bf7\u95ee\u4f60\u7684\u5230\u8fbe\u57ce\u5e02\u662f\u54ea\u91cc\uff1f',
                            'condition_rules': [],
                            'question_type': 'initial_response'
                        }]
                    },
                    'global_vars': ['toPlace_1963875239115', 'departDate_1963875239115', 'arriveDate_1963875239115', 'returnDate_1963875239115', 'toPlaceCode'],
                    'node_type': 'dialogue',
                    'edges': [{
                        'to_node_id': null,
                        'edge_type': 'hidden',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'toPlace'}], 'function_name': 'not_contain_key'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': true,
                            'key': 'parsing_failed'
                        }, {'operation': 'update_confirm_status'}, {
                            'operation': 'set_to_global_info',
                            'val': 2,
                            'key': 'sys_node_dialogue_cnt_limit'
                        }]
                    }, {
                        'to_node_id': null,
                        'edge_type': 'hidden',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'toPlace'}], 'function_name': 'not_contain_key'}]
                        }, {
                            'source': 'text',
                            'functions': [{
                                'content': {
                                    'key_suffix': '_1963875239115',
                                    'tags': 'to_place,depart_date,arrive_date,return_date'
                                }, 'function_name': 'task_parser'
                            }]
                        }]],
                        'actions': [{'operation': 'set_to_global_info', 'val': false, 'key': 'parsing_failed'}]
                    }, {
                        'to_node_id': '1963875239115',
                        'edge_type': 'hidden',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'compare': '<', 'val': 2, 'key': 'sys_node_dialogue_cnt'}],
                                'function_name': 'key_val_match'
                            }, {
                                'content': 'scenario_counter_rev',
                                'function_name': 'counter_check'
                            }, {'content': [{'key': 'toPlace'}], 'function_name': 'not_contain_key'}]
                        }]]
                    }, {
                        'to_node_id': '538282800447',
                        'edge_type': 'normal',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'toPlace'}], 'function_name': 'contain_key'}]
                        }, {
                            'source': 'global_info',
                            'functions': [{
                                'content': {
                                    'trans': 'PlaceMap_20180115164253',
                                    'from_key': 'toPlace',
                                    'to_key': 'toPlaceCode'
                                }, 'function_name': 'user_custom_transform'
                            }]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': false,
                            'key': 'parsing_failed'
                        }, {'operation': 'set_to_global_info', 'val': 0, 'key': 'sys_node_dialogue_cnt'}]
                    }, {
                        'to_node_id': '7281131367989',
                        'edge_type': 'normal',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'toPlace'}], 'function_name': 'contain_key'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': false,
                            'key': 'parsing_failed'
                        }, {'operation': 'set_to_global_info', 'val': 0, 'key': 'sys_node_dialogue_cnt'}]
                    }, {
                        'to_node_id': '0109075415165',
                        'edge_type': 'normal',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': 'node_counter',
                                'content_text_array': ['\u82e5\u8d85\u8fc7\u8282\u70b9\u5bf9\u8bdd\u8f6e\u6570\u9650\u5236'],
                                'function_name': 'counter_check'
                            }]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': false,
                            'key': 'parsing_failed'
                        }, {'operation': 'set_to_global_info', 'val': 0, 'key': 'sys_node_dialogue_cnt'}]
                    }, {
                        'to_node_id': '1963875239115',
                        'edge_type': 'else_into',
                        'condition_rules': [],
                        'actions': [{'operation': 'set_to_global_info', 'val': true, 'key': 'parsing_failed'}]
                    }],
                    'node_id': '1963875239115',
                    'entry_condition_rules': []
                }, {
                    'description': '\u641c\u7d22',
                    'warnings': [{'warning_msg': '\u51fa\u53e3\u8282\u70b9', 'type': 'has_exit_connection'}],
                    'content': {
                        'questions': [{
                            'msg': '',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'val': true, 'key': 'parsing_failed'}],
                                    'function_name': 'key_val_match'
                                }]
                            }]]
                        }, {
                            'msg': '[CMD]:{\'type\':\'planeticket\', \'urls\':[\'http:\/\/m.ctrip.com\/html5\/flight\/matrix.html\']}',
                            'condition_rules': []
                        }]
                    },
                    'node_type': 'dialogue',
                    'edges': [{
                        'to_node_id': null,
                        'condition_rules': [],
                        'actions': [{'operation': 'update_confirm_status'}, {
                            'operation': 'set_to_global_info',
                            'val': 2,
                            'key': 'sys_node_dialogue_cnt_limit'
                        }]
                    }, {'to_node_id': null, 'condition_rules': []}, {
                        'to_node_id': null,
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'compare': '<', 'val': '2', 'key': 'sys_node_dialogue_cnt'}],
                                'function_name': 'key_val_match'
                            }]
                        }]]
                    }, {
                        'to_node_id': '0',
                        'condition_rules': [],
                        'actions': [{'operation': 'set_to_global_info', 'val': false, 'key': 'parsing_failed'}]
                    }],
                    'node_id': '0109075415165',
                    'entry_condition_rules': []
                }, {
                    'description': '\u6210\u529f',
                    'warnings': [{'warning_msg': '\u51fa\u53e3\u8282\u70b9', 'type': 'has_exit_connection'}],
                    'content': {
                        'questions': [{
                            'msg': '',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'val': true, 'key': 'parsing_failed'}],
                                    'function_name': 'key_val_match'
                                }]
                            }]]
                        }, {
                            'msg': '[CMD]:{\'type\':\'planeticket\', \'urls\':[\'$global{book_url}\']}\r\n',
                            'condition_rules': []
                        }]
                    },
                    'node_type': 'dialogue',
                    'edges': [{
                        'to_node_id': null,
                        'condition_rules': [],
                        'actions': [{'operation': 'update_confirm_status'}, {
                            'operation': 'set_to_global_info',
                            'val': 1,
                            'key': 'sys_node_dialogue_cnt_limit'
                        }]
                    }, {'to_node_id': null, 'condition_rules': []}, {
                        'to_node_id': null,
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'compare': '<', 'val': '1', 'key': 'sys_node_dialogue_cnt'}],
                                'function_name': 'key_val_match'
                            }]
                        }]]
                    }, {
                        'to_node_id': '0',
                        'condition_rules': [],
                        'actions': [{'operation': 'set_to_global_info', 'val': false, 'key': 'parsing_failed'}]
                    }],
                    'node_id': '56651595721739',
                    'entry_condition_rules': []
                }, {
                    'description': '\u822a\u7a7a\u516c\u53f8',
                    'warnings': [],
                    'content': {
                        'questions': [{
                            'msg': '$msg_confirm\u597d\u7684\u3002\u8bf7\u95ee\u4f60\u5bf9\u822a\u7a7a\u516c\u53f8\u6709\u8981\u6c42\u5417\uff1f',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'val': true, 'key': 'parsing_failed'}],
                                    'function_name': 'key_val_match'
                                }]
                            }]],
                            'question_type': 'failure_response'
                        }, {
                            'msg': '$msg_confirm\u597d\u7684\u3002\u8bf7\u95ee\u4f60\u5bf9\u822a\u7a7a\u516c\u53f8\u6709\u8981\u6c42\u5417\uff1f',
                            'condition_rules': [],
                            'question_type': 'initial_response'
                        }]
                    },
                    'global_vars': ['airline'],
                    'node_type': 'dialogue',
                    'edges': [{
                        'to_node_id': null,
                        'edge_type': 'hidden',
                        'condition_rules': [],
                        'actions': [{'operation': 'update_confirm_status'}, {
                            'operation': 'set_to_global_info',
                            'val': 1,
                            'key': 'sys_node_dialogue_cnt_limit'
                        }]
                    }, {'to_node_id': null, 'edge_type': 'hidden', 'condition_rules': []}, {
                        'to_node_id': null,
                        'edge_type': 'hidden',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'compare': '<', 'val': 1, 'key': 'sys_node_dialogue_cnt'}],
                                'function_name': 'key_val_match'
                            }]
                        }]]
                    }, {
                        'to_node_id': null,
                        'edge_type': 'normal',
                        'condition_rules': [[{
                            'source': 'text',
                            'functions': [{
                                'content': {'trans': 'AirlineMap_20180115164247', 'to_key': 'airline'},
                                'function_name': 'user_custom_parser'
                            }]
                        }]],
                        'actions': []
                    }, {
                        'to_node_id': '349586337334',
                        'edge_type': 'else_into',
                        'condition_rules': [],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': false,
                            'key': 'parsing_failed'
                        }, {'operation': 'set_to_global_info', 'val': 0, 'key': 'sys_node_dialogue_cnt'}]
                    }],
                    'node_id': '077202261522770',
                    'entry_condition_rules': []
                }, {
                    'description': '\u5931\u8d25',
                    'warnings': [{'warning_msg': '\u51fa\u53e3\u8282\u70b9', 'type': 'has_exit_connection'}],
                    'content': {
                        'questions': [{
                            'msg': '',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'val': true, 'key': 'parsing_failed'}],
                                    'function_name': 'key_val_match'
                                }]
                            }]]
                        }, {'msg': '\u9884\u8ba2\u5931\u8d25\uff01', 'condition_rules': []}]
                    },
                    'node_type': 'dialogue',
                    'edges': [{
                        'to_node_id': null,
                        'condition_rules': [],
                        'actions': [{'operation': 'update_confirm_status'}, {
                            'operation': 'set_to_global_info',
                            'val': 1,
                            'key': 'sys_node_dialogue_cnt_limit'
                        }]
                    }, {'to_node_id': null, 'condition_rules': []}, {
                        'to_node_id': null,
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'compare': '<', 'val': '1', 'key': 'sys_node_dialogue_cnt'}],
                                'function_name': 'key_val_match'
                            }]
                        }]]
                    }, {
                        'to_node_id': '0',
                        'condition_rules': [],
                        'actions': [{'operation': 'set_to_global_info', 'val': false, 'key': 'parsing_failed'}]
                    }],
                    'node_id': '1683160729171',
                    'entry_condition_rules': []
                }, {
                    'description': '\u786e\u8ba4\u8ba2\u7968',
                    'warnings': [],
                    'content': {
                        'questions': [{
                            'msg': '\u60a8\u7684\u8981\u6c42\u5982\u4e0b\uff1a$item_list \u662f\u5426\u4e3a\u60a8\u9884\u8ba2\uff1f',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'key': 'parsing_failed', 'val': true}],
                                    'function_name': 'key_val_match'
                                }]
                            }]]
                        }, {
                            'msg': '\u60a8\u7684\u8981\u6c42\u5982\u4e0b\uff1a$item_list \u662f\u5426\u4e3a\u60a8\u9884\u8ba2\uff1f',
                            'condition_rules': []
                        }]
                    },
                    'node_type': 'dialogue',
                    'edges': [{
                        'to_node_id': null,
                        'condition_rules': [],
                        'actions': [{'operation': 'update_confirm_status'}, {
                            'operation': 'set_to_global_info',
                            'key': 'sys_node_dialogue_cnt_limit',
                            'val': 2
                        }]
                    }, {'to_node_id': null, 'condition_rules': []}, {
                        'to_node_id': null,
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'compare': '<', 'key': 'sys_node_dialogue_cnt', 'val': '2'}],
                                'function_name': 'key_val_match'
                            }]
                        }]]
                    }, {
                        'to_node_id': '2896238102350',
                        'condition_rules': [[{
                            'source': 'text',
                            'functions': [{'content': '\u4e0d|\u5426', 'function_name': 'contains'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'key': 'parsing_failed',
                            'val': false
                        }, {'operation': 'set_to_global_info', 'key': 'sys_node_dialogue_cnt', 'val': 0}]
                    }, {
                        'to_node_id': '56651595721739',
                        'condition_rules': [[{
                            'source': 'text',
                            'functions': [{
                                'content': '\u597d|\u662f|\u53ef\u4ee5|\u884c|\u6210|\u55ef',
                                'function_name': 'contains'
                            }]
                        }, {
                            'source': 'text',
                            'functions': [{
                                'content': 'http:\/\/172.17.0.1:12101\/book?type=flight',
                                'function_name': 'api_parser'
                            }]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'key': 'parsing_failed',
                            'val': false
                        }, {'operation': 'set_to_global_info', 'key': 'sys_node_dialogue_cnt', 'val': 0}]
                    }, {
                        'to_node_id': '1683160729171',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': 'node_counter', 'function_name': 'counter_check'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'key': 'parsing_failed',
                            'val': false
                        }, {'operation': 'set_to_global_info', 'key': 'sys_node_dialogue_cnt', 'val': 0}]
                    }, {
                        'to_node_id': '349586337334',
                        'condition_rules': [],
                        'actions': [{'operation': 'set_to_global_info', 'key': 'parsing_failed', 'val': true}]
                    }],
                    'node_id': '349586337334',
                    'entry_condition_rules': []
                }, {
                    'description': '\u51fa\u53d1\u57ce\u5e02\u8f6c\u6362\u5931\u8d25',
                    'warnings': [{'warning_msg': '\u51fa\u53e3\u8282\u70b9', 'type': 'has_exit_connection'}],
                    'content': {
                        'questions': [{
                            'msg': '',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'val': true, 'key': 'parsing_failed'}],
                                    'function_name': 'key_val_match'
                                }]
                            }]]
                        }, {
                            'msg': '$msg_confirm\u51fa\u53d1\u57ce\u5e02\u4e0d\u652f\u6301\u3002',
                            'condition_rules': []
                        }]
                    },
                    'node_type': 'dialogue',
                    'edges': [{
                        'to_node_id': null,
                        'condition_rules': [],
                        'actions': [{'operation': 'update_confirm_status'}, {
                            'operation': 'set_to_global_info',
                            'val': 2,
                            'key': 'sys_node_dialogue_cnt_limit'
                        }]
                    }, {'to_node_id': null, 'condition_rules': []}, {
                        'to_node_id': null,
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'compare': '<', 'val': '2', 'key': 'sys_node_dialogue_cnt'}],
                                'function_name': 'key_val_match'
                            }]
                        }]]
                    }, {
                        'to_node_id': '0',
                        'condition_rules': [],
                        'actions': [{'operation': 'set_to_global_info', 'val': false, 'key': 'parsing_failed'}]
                    }],
                    'node_id': '2977183271008',
                    'entry_condition_rules': []
                }, {
                    'description': '\u5230\u8fbe\u57ce\u5e02\u8f6c\u6362\u5931\u8d25',
                    'warnings': [{'warning_msg': '\u51fa\u53e3\u8282\u70b9', 'type': 'has_exit_connection'}],
                    'content': {
                        'questions': [{
                            'msg': '',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'val': true, 'key': 'parsing_failed'}],
                                    'function_name': 'key_val_match'
                                }]
                            }]]
                        }, {
                            'msg': '$msg_confirm\u5230\u8fbe\u57ce\u5e02\u4e0d\u652f\u6301\u3002',
                            'condition_rules': []
                        }]
                    },
                    'node_type': 'dialogue',
                    'edges': [{
                        'to_node_id': null,
                        'condition_rules': [],
                        'actions': [{'operation': 'update_confirm_status'}, {
                            'operation': 'set_to_global_info',
                            'val': 2,
                            'key': 'sys_node_dialogue_cnt_limit'
                        }]
                    }, {'to_node_id': null, 'condition_rules': []}, {
                        'to_node_id': null,
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'compare': '<', 'val': '2', 'key': 'sys_node_dialogue_cnt'}],
                                'function_name': 'key_val_match'
                            }]
                        }]]
                    }, {
                        'to_node_id': '0',
                        'condition_rules': [],
                        'actions': [{'operation': 'set_to_global_info', 'val': false, 'key': 'parsing_failed'}]
                    }],
                    'node_id': '7281131367989',
                    'entry_condition_rules': []
                }, {
                    'description': '\u51fa\u53d1\u57ce\u5e02\u5230\u8fbe\u57ce\u5e02',
                    'warnings': [],
                    'content': {
                        'questions': [{
                            'msg': null,
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{'content': [{'key': 'fromPlace'}], 'function_name': 'contain_key'}]
                            }], [{
                                'source': 'global_info',
                                'functions': [{'content': [{'key': 'toPlace'}], 'function_name': 'contain_key'}]
                            }]]
                        }, {
                            'msg': '$msg_confirm\u597d\u7684\u3002\u8bf7\u95ee\u4f60\u4ece\u54ea\u91cc\u51fa\u53d1\u5230\u54ea\u91cc\u53bb\uff1f\u4f60\u53ef\u4ee5\u8bf4\u201c\u4ece\u5317\u4eac\u5e02\u5230\u4e0a\u6d77\u5e02\u201d\u3002',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'key': 'parsing_failed', 'val': true}],
                                    'function_name': 'key_val_match'
                                }]
                            }]]
                        }, {
                            'msg': '$msg_confirm\u597d\u7684\u3002\u8bf7\u95ee\u4f60\u4ece\u54ea\u91cc\u51fa\u53d1\u5230\u54ea\u91cc\u53bb\uff1f',
                            'condition_rules': []
                        }]
                    },
                    'node_type': 'dialogue',
                    'edges': [{
                        'to_node_id': null,
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'key': 'fromPlace'}, {'key': 'toPlace'}],
                                'function_name': 'not_contain_key'
                            }]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'key': 'parsing_failed',
                            'val': true
                        }, {'operation': 'update_confirm_status'}, {
                            'operation': 'set_to_global_info',
                            'key': 'sys_node_dialogue_cnt_limit',
                            'val': 2
                        }]
                    }, {
                        'to_node_id': null,
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'key': 'fromPlace'}, {'key': 'toPlace'}],
                                'function_name': 'not_contain_key'
                            }]
                        }, {
                            'source': 'text',
                            'functions': [{
                                'content': 'multiselect-all,from_place,to_place,depart_date,arrive_date,return_date',
                                'function_name': 'task_parser'
                            }]
                        }]],
                        'actions': [{'operation': 'set_to_global_info', 'key': 'parsing_failed', 'val': false}]
                    }, {
                        'to_node_id': '570148214576',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'compare': '<', 'key': 'sys_node_dialogue_cnt', 'val': '2'}],
                                'function_name': 'key_val_match'
                            }, {
                                'content': 'scenario_counter_rev',
                                'function_name': 'counter_check'
                            }, {
                                'content': [{'key': 'fromPlace'}, {'key': 'toPlace'}],
                                'function_name': 'not_contain_key'
                            }]
                        }]]
                    }, {
                        'to_node_id': '115011205620527',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'fromPlace'}], 'function_name': 'contain_key'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'key': 'parsing_failed',
                            'val': false
                        }, {'operation': 'set_to_global_info', 'key': 'sys_node_dialogue_cnt', 'val': 0}]
                    }, {
                        'to_node_id': '115011205620527',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'toPlace'}], 'function_name': 'contain_key'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'key': 'parsing_failed',
                            'val': false
                        }, {'operation': 'set_to_global_info', 'key': 'sys_node_dialogue_cnt', 'val': 0}]
                    }, {
                        'to_node_id': '0109075415165',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': 'node_counter', 'function_name': 'counter_check'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'key': 'parsing_failed',
                            'val': false
                        }, {'operation': 'set_to_global_info', 'key': 'sys_node_dialogue_cnt', 'val': 0}]
                    }, {
                        'to_node_id': '570148214576',
                        'condition_rules': [],
                        'actions': [{'operation': 'set_to_global_info', 'key': 'parsing_failed', 'val': true}]
                    }],
                    'node_id': '570148214576',
                    'entry_condition_rules': []
                }, {
                    'description': '\u53d6\u6d88',
                    'warnings': [{'warning_msg': '\u51fa\u53e3\u8282\u70b9', 'type': 'has_exit_connection'}],
                    'content': {
                        'questions': [{
                            'msg': '',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'key': 'parsing_failed', 'val': true}],
                                    'function_name': 'key_val_match'
                                }]
                            }]]
                        }, {'msg': '\u9884\u8ba2\u64cd\u4f5c\u5df2\u53d6\u6d88\u3002', 'condition_rules': []}]
                    },
                    'node_type': 'dialogue',
                    'edges': [{
                        'to_node_id': null,
                        'condition_rules': [],
                        'actions': [{'operation': 'update_confirm_status'}, {
                            'operation': 'set_to_global_info',
                            'key': 'sys_node_dialogue_cnt_limit',
                            'val': 2
                        }]
                    }, {'to_node_id': null, 'condition_rules': []}, {
                        'to_node_id': null,
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'compare': '<', 'key': 'sys_node_dialogue_cnt', 'val': '2'}],
                                'function_name': 'key_val_match'
                            }]
                        }]]
                    }, {
                        'to_node_id': '0',
                        'condition_rules': [],
                        'actions': [{'operation': 'set_to_global_info', 'key': 'parsing_failed', 'val': false}]
                    }],
                    'node_id': '2896238102350',
                    'entry_condition_rules': []
                }],
                'setting': {'sys_node_dialogue_cnt_limit': 2, 'sys_scenario_dialogue_cnt_limit': 5},
                'msg_confirm': [{
                    'msg': '\u51fa\u53d1\u5730\u4e3a$global{fromPlace}\u3002',
                    'type': 'string',
                    'key': 'fromPlace'
                }, {
                    'msg': '\u5230\u8fbe\u5730\u4e3a$global{toPlace}\u3002',
                    'type': 'string',
                    'key': 'toPlace'
                }, {
                    'msg': '\u51fa\u53d1\u65e5\u671f\u4e3a$global{departDate}\u3002',
                    'type': 'date',
                    'key': 'departDate'
                }, {'msg': '\u822a\u7a7a\u516c\u53f8\u4e3a$global{airline}\u3002', 'type': 'string', 'key': 'airline'}],
                'metadata': {
                    'scenario_name': '\u8ba2\u7968',
                    'update_time': '2018-04-25 16:05:37',
                    'update_user': '0F4A01A5E335520F6C183AEFA6C5DBE25',
                    'scenario_id': '14f2ec36-a955-4291-b0c8-9e725935d437'
                }
            },
            "editingLayout": {
                '5284290779834': {'position': {'top': 137, 'left': 305}},
                '499330479537': {'position': {'left': 250, 'top': 310}},
                '538282800447': {'position': {'top': 769, 'left': 427}},
                '115011205620527': {'position': {'top': 501, 'left': 23}},
                '1963875239115': {'position': {'top': 514, 'left': 787}},
                '077202261522770': {'position': {'top': 922, 'left': 631}},
                '0109075415165': {'position': {'top': 667, 'left': 20}},
                '56651595721739': {'position': {'top': 1301, 'left': 318}},
                '9380107494178': {'position': {'left': 250, 'top': 205}},
                '0731761807064': {'position': {'left': 250, 'top': 249}},
                '1683160729171': {'position': {'top': 1108, 'left': 12}},
                '349586337334': {'position': {'top': 1113, 'left': 309}},
                '2977183271008': {'position': {'top': 337, 'left': 27}},
                '7281131367989': {'position': {'top': 386, 'left': 1144}},
                '570148214576': {'position': {'top': 240, 'left': 584}},
                '2896238102350': {'position': {'top': 1112, 'left': 618}},
                '01240253614476': {'position': {'top': 384, 'left': 1229}},
                '833578968830': {'position': {'left': 1280, 'top': 538}},
                '2746081366131': {'position': {'left': 992, 'top': 736}},
                '12041276623594': {'position': {'top': 930, 'left': 998}},
                '4968575420413': {'position': {'top': 1133, 'left': 993}}
            },
            "editing": 1,
            "layout": {
                '5284290779834': {'position': {'top': 169, 'left': 312}},
                '499330479537': {'position': {'left': 250, 'top': 310}},
                '538282800447': {'position': {'top': 790, 'left': 319}},
                '115011205620527': {'position': {'top': 520, 'left': 20}},
                '1963875239115': {'position': {'top': 520, 'left': 602}},
                '077202261522770': {'position': {'top': 943, 'left': 317}},
                '0109075415165': {'position': {'top': 667, 'left': 20}},
                '56651595721739': {'position': {'top': 1287, 'left': 316}},
                '9380107494178': {'position': {'left': 250, 'top': 205}},
                '0731761807064': {'position': {'left': 250, 'top': 249}},
                '1683160729171': {'position': {'top': 1096, 'left': 35}},
                '349586337334': {'position': {'top': 1094, 'left': 317}},
                '2977183271008': {'position': {'top': 337, 'left': 27}},
                '7281131367989': {'position': {'top': 344, 'left': 598}},
                '570148214576': {'position': {'top': 338, 'left': 308}},
                '2896238102350': {'position': {'top': 1095, 'left': 595}}
            },
            "editingContent": {
                'nodes': [{
                    'node_type': 'exit',
                    'node_id': '0',
                    'description': 'Exit',
                    'warnings': [{
                        'warning_msg': '\u8bf7\u65b0\u589e\u81f3\u5c11\u4e00\u4e2a\u6307\u5411\u6b64\u8282\u70b9\u7684\u8fde\u7ebf',
                        'type': 'missing_inbound_connection'
                    }, {
                        'warning_msg': '\u8bf7\u5728\u6b64\u8282\u70b9\u65b0\u589e\u81f3\u5c11\u4e00\u4e2a\u6307\u5411\u5176\u4ed6\u8282\u70b9\u7684\u8fde\u7ebf',
                        'type': 'missing_outbound_connection'
                    }]
                }, {
                    'description': '\u8ba2\u98de\u673a\u7968',
                    'warnings': [],
                    'content': {
                        'questions': [{
                            'msg': '',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'key': 'parsing_failed', 'val': true}],
                                    'function_name': 'key_val_match'
                                }]
                            }]]
                        }, {'msg': '', 'condition_rules': []}]
                    },
                    'global_vars': ['fromPlace_5284290779834', 'toPlace_5284290779834', 'departDate_5284290779834', 'airline'],
                    'node_type': 'entry',
                    'edges': [{
                        'to_node_id': null,
                        'edge_type': 'hidden',
                        'condition_rules': [],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'key': 'sys_scenario_dialogue_cnt',
                            'val': 0
                        }, {
                            'operation': 'set_to_global_info',
                            'key': 'sys_node_dialogue_cnt',
                            'val': 0
                        }, {
                            'operation': 'set_to_global_info',
                            'key': 'sys_scenario_dialogue_cnt_limit',
                            'val': 5
                        }, {'operation': 'set_to_global_info', 'key': 'sys_node_dialogue_cnt_limit', 'val': 2}]
                    }, {'to_node_id': null, 'edge_type': 'hidden', 'condition_rules': []}, {
                        'to_node_id': null,
                        'edge_type': 'hidden',
                        'condition_rules': []
                    }, {
                        'to_node_id': null,
                        'edge_type': 'normal',
                        'condition_rules': [[{
                            'source': 'text',
                            'functions': [{
                                'content': {
                                    'key_suffix': '_5284290779834',
                                    'tags': 'from_place,to_place,depart_date'
                                },
                                'function_name': 'task_parser',
                                'content_text_array': ['fromPlace', 'toPlace', 'departDate']
                            }]
                        }]],
                        'actions': []
                    }, {
                        'to_node_id': null,
                        'edge_type': 'normal',
                        'condition_rules': [[{
                            'source': 'text',
                            'functions': [{
                                'content': {'trans': null, 'to_key': 'airline'},
                                'function_name': 'user_custom_parser'
                            }]
                        }]],
                        'actions': []
                    }, {
                        'to_node_id': '570148214576',
                        'edge_type': 'else_into',
                        'condition_rules': [],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'key': 'parsing_failed',
                            'val': false
                        }, {'operation': 'set_to_global_info', 'key': 'sys_node_dialogue_cnt', 'val': 0}]
                    }],
                    'node_id': '5284290779834',
                    'entry_condition_rules': [[{
                        'source': 'text',
                        'functions': [{
                            'content': '\u8ba2\u98de\u673a\u7968',
                            'function_name': 'match',
                            'content_text_array': []
                        }]
                    }], [{
                        'source': 'cu',
                        'functions': [{
                            'content': 'Intent',
                            'function_name': 'cu_parser',
                            'content_text_array': ['Intent']
                        }]
                    }, {
                        'source': 'global_info',
                        'functions': [{
                            'content': [{'compare': '==', 'key': 'Intent', 'val': '\u8ba2\uff0c\u673a\u7968'}],
                            'function_name': 'key_val_match'
                        }]
                    }], [{
                        'source': 'cu',
                        'functions': [{
                            'content': 'Intent',
                            'function_name': 'cu_parser',
                            'content_text_array': ['Intent']
                        }]
                    }, {
                        'source': 'global_info',
                        'functions': [{
                            'content': [{'compare': '==', 'key': 'Intent', 'val': '\u67e5\uff0c\u673a\u7968'}],
                            'function_name': 'key_val_match'
                        }]
                    }]]
                }, {
                    'description': '\u51fa\u53d1\u65f6\u95f4',
                    'warnings': [],
                    'content': {
                        'questions': [{
                            'msg': null,
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{'content': [{'key': 'departDate'}], 'function_name': 'contain_key'}]
                            }]]
                        }, {
                            'msg': '$msg_confirm\u597d\u7684\u3002\u8bf7\u95ee\u4f60\u7684\u51fa\u53d1\u65f6\u95f4\u662f\u51e0\u6708\u51e0\u53f7\uff1f',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'val': true, 'key': 'parsing_failed'}],
                                    'function_name': 'key_val_match'
                                }]
                            }]]
                        }, {
                            'msg': '$msg_confirm\u597d\u7684\u3002\u8bf7\u95ee\u4f60\u7684\u51fa\u53d1\u65f6\u95f4\u662f\u51e0\u6708\u51e0\u53f7\uff1f',
                            'condition_rules': []
                        }]
                    },
                    'node_type': 'dialogue',
                    'edges': [{
                        'to_node_id': null,
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'departDate'}], 'function_name': 'not_contain_key'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': true,
                            'key': 'parsing_failed'
                        }, {'operation': 'update_confirm_status'}, {
                            'operation': 'set_to_global_info',
                            'val': 2,
                            'key': 'sys_node_dialogue_cnt_limit'
                        }]
                    }, {
                        'to_node_id': null,
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'departDate'}], 'function_name': 'not_contain_key'}]
                        }, {
                            'source': 'text',
                            'functions': [{
                                'content': 'multiselect-all,from_place,to_place,depart_date,arrive_date,return_date',
                                'function_name': 'task_parser'
                            }]
                        }]],
                        'actions': [{'operation': 'set_to_global_info', 'val': false, 'key': 'parsing_failed'}]
                    }, {
                        'to_node_id': '538282800447',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'compare': '<', 'val': '2', 'key': 'sys_node_dialogue_cnt'}],
                                'function_name': 'key_val_match'
                            }, {
                                'content': 'scenario_counter_rev',
                                'function_name': 'counter_check'
                            }, {'content': [{'key': 'departDate'}], 'function_name': 'not_contain_key'}]
                        }]]
                    }, {
                        'to_node_id': '349586337334',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'departDate'}], 'function_name': 'contain_key'}]
                        }, {
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'airline'}], 'function_name': 'contain_key'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': false,
                            'key': 'parsing_failed'
                        }, {'operation': 'set_to_global_info', 'val': 0, 'key': 'sys_node_dialogue_cnt'}]
                    }, {
                        'to_node_id': '077202261522770',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'departDate'}], 'function_name': 'contain_key'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': false,
                            'key': 'parsing_failed'
                        }, {'operation': 'set_to_global_info', 'val': 0, 'key': 'sys_node_dialogue_cnt'}]
                    }, {
                        'to_node_id': '0109075415165',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': 'node_counter', 'function_name': 'counter_check'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': false,
                            'key': 'parsing_failed'
                        }, {'operation': 'set_to_global_info', 'val': 0, 'key': 'sys_node_dialogue_cnt'}]
                    }, {
                        'to_node_id': '538282800447',
                        'condition_rules': [],
                        'actions': [{'operation': 'set_to_global_info', 'val': true, 'key': 'parsing_failed'}]
                    }],
                    'node_id': '538282800447',
                    'entry_condition_rules': []
                }, {
                    'default_parser_with_suffix': false,
                    'description': '\u51fa\u53d1\u57ce\u5e02',
                    'warnings': [],
                    'content': {
                        'questions': [{
                            'msg': null,
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{'content': [{'key': 'fromPlace'}], 'function_name': 'contain_key'}]
                            }]],
                            'question_type': 'skip_response'
                        }, {
                            'msg': '$msg_confirm\u597d\u7684\u3002\u8bf7\u95ee\u4f60\u7684\u51fa\u53d1\u57ce\u5e02\u662f\u54ea\u91cc\uff1f',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'val': true, 'key': 'parsing_failed'}],
                                    'function_name': 'key_val_match'
                                }]
                            }]],
                            'question_type': 'failure_response'
                        }, {
                            'msg': '$msg_confirm\u597d\u7684\u3002\u8bf7\u95ee\u4f60\u7684\u51fa\u53d1\u57ce\u5e02\u662f\u54ea\u91cc\uff1f',
                            'condition_rules': [],
                            'question_type': 'initial_response'
                        }]
                    },
                    'global_vars': ['fromPlace_115011205620527', 'toPlace_115011205620527', 'departDate_115011205620527', 'arriveDate_115011205620527', 'returnDate_115011205620527', 'fromPlaceCode'],
                    'node_type': 'dialogue',
                    'edges': [{
                        'to_node_id': null,
                        'edge_type': 'hidden',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'fromPlace'}], 'function_name': 'not_contain_key'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': true,
                            'key': 'parsing_failed'
                        }, {'operation': 'update_confirm_status'}, {
                            'operation': 'set_to_global_info',
                            'val': 2,
                            'key': 'sys_node_dialogue_cnt_limit'
                        }]
                    }, {
                        'to_node_id': null,
                        'edge_type': 'hidden',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'fromPlace'}], 'function_name': 'not_contain_key'}]
                        }, {
                            'source': 'text',
                            'functions': [{
                                'content': {
                                    'key_suffix': '_115011205620527',
                                    'tags': 'multiselect-all,from_place,to_place,depart_date,arrive_date,return_date'
                                }, 'function_name': 'task_parser'
                            }]
                        }]],
                        'actions': [{'operation': 'set_to_global_info', 'val': false, 'key': 'parsing_failed'}]
                    }, {
                        'to_node_id': '115011205620527',
                        'edge_type': 'hidden',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'compare': '<', 'val': 2, 'key': 'sys_node_dialogue_cnt'}],
                                'function_name': 'key_val_match'
                            }, {
                                'content': 'scenario_counter_rev',
                                'function_name': 'counter_check'
                            }, {'content': [{'key': 'fromPlace'}], 'function_name': 'not_contain_key'}]
                        }]]
                    }, {
                        'to_node_id': '1963875239115',
                        'edge_type': 'normal',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'fromPlace'}], 'function_name': 'contain_key'}]
                        }, {
                            'source': 'global_info',
                            'functions': [{
                                'content': {
                                    'trans': 'PlaceMap_20180115164253',
                                    'from_key': 'fromPlace',
                                    'to_key': 'fromPlaceCode'
                                }, 'function_name': 'user_custom_transform'
                            }]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': false,
                            'key': 'parsing_failed'
                        }, {'operation': 'set_to_global_info', 'val': 0, 'key': 'sys_node_dialogue_cnt'}]
                    }, {
                        'to_node_id': '2977183271008',
                        'edge_type': 'normal',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'fromPlace'}], 'function_name': 'contain_key'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': false,
                            'key': 'parsing_failed'
                        }, {'operation': 'set_to_global_info', 'val': 0, 'key': 'sys_node_dialogue_cnt'}]
                    }, {
                        'to_node_id': '0109075415165',
                        'edge_type': 'normal',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': 'node_counter',
                                'content_text_array': ['\u82e5\u8d85\u8fc7\u8282\u70b9\u5bf9\u8bdd\u8f6e\u6570\u9650\u5236'],
                                'function_name': 'counter_check'
                            }]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': false,
                            'key': 'parsing_failed'
                        }, {'operation': 'set_to_global_info', 'val': 0, 'key': 'sys_node_dialogue_cnt'}]
                    }, {
                        'to_node_id': '115011205620527',
                        'edge_type': 'else_into',
                        'condition_rules': [],
                        'actions': [{'operation': 'set_to_global_info', 'val': true, 'key': 'parsing_failed'}]
                    }],
                    'node_id': '115011205620527',
                    'entry_condition_rules': []
                }, {
                    'default_parser_with_suffix': false,
                    'description': '\u5230\u8fbe\u57ce\u5e02',
                    'warnings': [],
                    'content': {
                        'questions': [{
                            'msg': null,
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{'content': [{'key': 'toPlace'}], 'function_name': 'contain_key'}]
                            }]],
                            'question_type': 'skip_response'
                        }, {
                            'msg': '$msg_confirm\u597d\u7684\u3002\u8bf7\u95ee\u4f60\u7684\u5230\u8fbe\u57ce\u5e02\u662f\u54ea\u91cc\uff1f\u53ef\u4ee5\u8bf4\u201c\u53bb\u4e0a\u6d77\u5e02\u201d\u3002',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'val': true, 'key': 'parsing_failed'}],
                                    'function_name': 'key_val_match'
                                }]
                            }]],
                            'question_type': 'failure_response'
                        }, {
                            'msg': '$msg_confirm\u597d\u7684\u3002\u8bf7\u95ee\u4f60\u7684\u5230\u8fbe\u57ce\u5e02\u662f\u54ea\u91cc\uff1f',
                            'condition_rules': [],
                            'question_type': 'initial_response'
                        }]
                    },
                    'global_vars': ['toPlace_1963875239115', 'departDate_1963875239115', 'arriveDate_1963875239115', 'returnDate_1963875239115', 'toPlaceCode'],
                    'node_type': 'dialogue',
                    'edges': [{
                        'to_node_id': null,
                        'edge_type': 'hidden',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'toPlace'}], 'function_name': 'not_contain_key'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': true,
                            'key': 'parsing_failed'
                        }, {'operation': 'update_confirm_status'}, {
                            'operation': 'set_to_global_info',
                            'val': 2,
                            'key': 'sys_node_dialogue_cnt_limit'
                        }]
                    }, {
                        'to_node_id': null,
                        'edge_type': 'hidden',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'toPlace'}], 'function_name': 'not_contain_key'}]
                        }, {
                            'source': 'text',
                            'functions': [{
                                'content': {
                                    'key_suffix': '_1963875239115',
                                    'tags': 'to_place,depart_date,arrive_date,return_date'
                                }, 'function_name': 'task_parser'
                            }]
                        }]],
                        'actions': [{'operation': 'set_to_global_info', 'val': false, 'key': 'parsing_failed'}]
                    }, {
                        'to_node_id': '1963875239115',
                        'edge_type': 'hidden',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'compare': '<', 'val': 2, 'key': 'sys_node_dialogue_cnt'}],
                                'function_name': 'key_val_match'
                            }, {
                                'content': 'scenario_counter_rev',
                                'function_name': 'counter_check'
                            }, {'content': [{'key': 'toPlace'}], 'function_name': 'not_contain_key'}]
                        }]]
                    }, {
                        'to_node_id': '538282800447',
                        'edge_type': 'normal',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'toPlace'}], 'function_name': 'contain_key'}]
                        }, {
                            'source': 'global_info',
                            'functions': [{
                                'content': {
                                    'trans': 'PlaceMap_20180115164253',
                                    'from_key': 'toPlace',
                                    'to_key': 'toPlaceCode'
                                }, 'function_name': 'user_custom_transform'
                            }]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': false,
                            'key': 'parsing_failed'
                        }, {'operation': 'set_to_global_info', 'val': 0, 'key': 'sys_node_dialogue_cnt'}]
                    }, {
                        'to_node_id': '7281131367989',
                        'edge_type': 'normal',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'toPlace'}], 'function_name': 'contain_key'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': false,
                            'key': 'parsing_failed'
                        }, {'operation': 'set_to_global_info', 'val': 0, 'key': 'sys_node_dialogue_cnt'}]
                    }, {
                        'to_node_id': '0109075415165',
                        'edge_type': 'normal',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': 'node_counter',
                                'content_text_array': ['\u82e5\u8d85\u8fc7\u8282\u70b9\u5bf9\u8bdd\u8f6e\u6570\u9650\u5236'],
                                'function_name': 'counter_check'
                            }]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': false,
                            'key': 'parsing_failed'
                        }, {'operation': 'set_to_global_info', 'val': 0, 'key': 'sys_node_dialogue_cnt'}]
                    }, {
                        'to_node_id': '1963875239115',
                        'edge_type': 'else_into',
                        'condition_rules': [],
                        'actions': [{'operation': 'set_to_global_info', 'val': true, 'key': 'parsing_failed'}]
                    }],
                    'node_id': '1963875239115',
                    'entry_condition_rules': []
                }, {
                    'description': '\u641c\u7d22',
                    'warnings': [{'warning_msg': '\u51fa\u53e3\u8282\u70b9', 'type': 'has_exit_connection'}],
                    'content': {
                        'questions': [{
                            'msg': '',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'val': true, 'key': 'parsing_failed'}],
                                    'function_name': 'key_val_match'
                                }]
                            }]]
                        }, {
                            'msg': '[CMD]:{\'type\':\'planeticket\', \'urls\':[\'http:\/\/m.ctrip.com\/html5\/flight\/matrix.html\']}',
                            'condition_rules': []
                        }]
                    },
                    'node_type': 'dialogue',
                    'edges': [{
                        'to_node_id': null,
                        'condition_rules': [],
                        'actions': [{'operation': 'update_confirm_status'}, {
                            'operation': 'set_to_global_info',
                            'val': 2,
                            'key': 'sys_node_dialogue_cnt_limit'
                        }]
                    }, {'to_node_id': null, 'condition_rules': []}, {
                        'to_node_id': null,
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'compare': '<', 'val': '2', 'key': 'sys_node_dialogue_cnt'}],
                                'function_name': 'key_val_match'
                            }]
                        }]]
                    }, {
                        'to_node_id': '0',
                        'condition_rules': [],
                        'actions': [{'operation': 'set_to_global_info', 'val': false, 'key': 'parsing_failed'}]
                    }],
                    'node_id': '0109075415165',
                    'entry_condition_rules': []
                }, {
                    'description': '\u6210\u529f',
                    'warnings': [{'warning_msg': '\u51fa\u53e3\u8282\u70b9', 'type': 'has_exit_connection'}],
                    'content': {
                        'questions': [{
                            'msg': '',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'val': true, 'key': 'parsing_failed'}],
                                    'function_name': 'key_val_match'
                                }]
                            }]]
                        }, {
                            'msg': '[CMD]:{\'type\':\'planeticket\', \'urls\':[\'$global{book_url}\']}\r\n',
                            'condition_rules': []
                        }]
                    },
                    'node_type': 'dialogue',
                    'edges': [{
                        'to_node_id': null,
                        'condition_rules': [],
                        'actions': [{'operation': 'update_confirm_status'}, {
                            'operation': 'set_to_global_info',
                            'val': 1,
                            'key': 'sys_node_dialogue_cnt_limit'
                        }]
                    }, {'to_node_id': null, 'condition_rules': []}, {
                        'to_node_id': null,
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'compare': '<', 'val': '1', 'key': 'sys_node_dialogue_cnt'}],
                                'function_name': 'key_val_match'
                            }]
                        }]]
                    }, {
                        'to_node_id': '0',
                        'condition_rules': [],
                        'actions': [{'operation': 'set_to_global_info', 'val': false, 'key': 'parsing_failed'}]
                    }],
                    'node_id': '56651595721739',
                    'entry_condition_rules': []
                }, {
                    'description': '\u822a\u7a7a\u516c\u53f8',
                    'warnings': [],
                    'content': {
                        'questions': [{
                            'msg': '$msg_confirm\u597d\u7684\u3002\u8bf7\u95ee\u4f60\u5bf9\u822a\u7a7a\u516c\u53f8\u6709\u8981\u6c42\u5417\uff1f',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'val': true, 'key': 'parsing_failed'}],
                                    'function_name': 'key_val_match'
                                }]
                            }]],
                            'question_type': 'failure_response'
                        }, {
                            'msg': '$msg_confirm\u597d\u7684\u3002\u8bf7\u95ee\u4f60\u5bf9\u822a\u7a7a\u516c\u53f8\u6709\u8981\u6c42\u5417\uff1f',
                            'condition_rules': [],
                            'question_type': 'initial_response'
                        }]
                    },
                    'global_vars': ['airline'],
                    'node_type': 'dialogue',
                    'edges': [{
                        'to_node_id': null,
                        'edge_type': 'hidden',
                        'condition_rules': [],
                        'actions': [{'operation': 'update_confirm_status'}, {
                            'operation': 'set_to_global_info',
                            'val': 1,
                            'key': 'sys_node_dialogue_cnt_limit'
                        }]
                    }, {'to_node_id': null, 'edge_type': 'hidden', 'condition_rules': []}, {
                        'to_node_id': null,
                        'edge_type': 'hidden',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'compare': '<', 'val': 1, 'key': 'sys_node_dialogue_cnt'}],
                                'function_name': 'key_val_match'
                            }]
                        }]]
                    }, {
                        'to_node_id': null,
                        'edge_type': 'normal',
                        'condition_rules': [[{
                            'source': 'text',
                            'functions': [{
                                'content': {'trans': 'AirlineMap_20180115164247', 'to_key': 'airline'},
                                'function_name': 'user_custom_parser'
                            }]
                        }]],
                        'actions': []
                    }, {
                        'to_node_id': '349586337334',
                        'edge_type': 'else_into',
                        'condition_rules': [],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': false,
                            'key': 'parsing_failed'
                        }, {'operation': 'set_to_global_info', 'val': 0, 'key': 'sys_node_dialogue_cnt'}]
                    }],
                    'node_id': '077202261522770',
                    'entry_condition_rules': []
                }, {
                    'description': '\u5931\u8d25',
                    'warnings': [{'warning_msg': '\u51fa\u53e3\u8282\u70b9', 'type': 'has_exit_connection'}],
                    'content': {
                        'questions': [{
                            'msg': '',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'val': true, 'key': 'parsing_failed'}],
                                    'function_name': 'key_val_match'
                                }]
                            }]]
                        }, {'msg': '\u9884\u8ba2\u5931\u8d25\uff01', 'condition_rules': []}]
                    },
                    'node_type': 'dialogue',
                    'edges': [{
                        'to_node_id': null,
                        'condition_rules': [],
                        'actions': [{'operation': 'update_confirm_status'}, {
                            'operation': 'set_to_global_info',
                            'val': 1,
                            'key': 'sys_node_dialogue_cnt_limit'
                        }]
                    }, {'to_node_id': null, 'condition_rules': []}, {
                        'to_node_id': null,
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'compare': '<', 'val': '1', 'key': 'sys_node_dialogue_cnt'}],
                                'function_name': 'key_val_match'
                            }]
                        }]]
                    }, {
                        'to_node_id': '0',
                        'condition_rules': [],
                        'actions': [{'operation': 'set_to_global_info', 'val': false, 'key': 'parsing_failed'}]
                    }],
                    'node_id': '1683160729171',
                    'entry_condition_rules': []
                }, {
                    'description': '\u786e\u8ba4\u8ba2\u7968',
                    'warnings': [],
                    'content': {
                        'questions': [{
                            'msg': '\u60a8\u7684\u8981\u6c42\u5982\u4e0b\uff1a$item_list \u662f\u5426\u4e3a\u60a8\u9884\u8ba2\uff1f',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'key': 'parsing_failed', 'val': true}],
                                    'function_name': 'key_val_match'
                                }]
                            }]]
                        }, {
                            'msg': '\u60a8\u7684\u8981\u6c42\u5982\u4e0b\uff1a$item_list \u662f\u5426\u4e3a\u60a8\u9884\u8ba2\uff1f',
                            'condition_rules': []
                        }]
                    },
                    'node_type': 'dialogue',
                    'edges': [{
                        'to_node_id': null,
                        'condition_rules': [],
                        'actions': [{'operation': 'update_confirm_status'}, {
                            'operation': 'set_to_global_info',
                            'key': 'sys_node_dialogue_cnt_limit',
                            'val': 2
                        }]
                    }, {'to_node_id': null, 'condition_rules': []}, {
                        'to_node_id': null,
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'compare': '<', 'key': 'sys_node_dialogue_cnt', 'val': '2'}],
                                'function_name': 'key_val_match'
                            }]
                        }]]
                    }, {
                        'to_node_id': '2896238102350',
                        'condition_rules': [[{
                            'source': 'text',
                            'functions': [{'content': '\u4e0d|\u5426', 'function_name': 'contains'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'key': 'parsing_failed',
                            'val': false
                        }, {'operation': 'set_to_global_info', 'key': 'sys_node_dialogue_cnt', 'val': 0}]
                    }, {
                        'to_node_id': '56651595721739',
                        'condition_rules': [[{
                            'source': 'text',
                            'functions': [{
                                'content': '\u597d|\u662f|\u53ef\u4ee5|\u884c|\u6210|\u55ef',
                                'function_name': 'contains'
                            }]
                        }, {
                            'source': 'text',
                            'functions': [{
                                'content': 'http:\/\/172.17.0.1:12101\/book?type=flight',
                                'function_name': 'api_parser'
                            }]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'key': 'parsing_failed',
                            'val': false
                        }, {'operation': 'set_to_global_info', 'key': 'sys_node_dialogue_cnt', 'val': 0}]
                    }, {
                        'to_node_id': '1683160729171',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': 'node_counter', 'function_name': 'counter_check'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'key': 'parsing_failed',
                            'val': false
                        }, {'operation': 'set_to_global_info', 'key': 'sys_node_dialogue_cnt', 'val': 0}]
                    }, {
                        'to_node_id': '349586337334',
                        'condition_rules': [],
                        'actions': [{'operation': 'set_to_global_info', 'key': 'parsing_failed', 'val': true}]
                    }],
                    'node_id': '349586337334',
                    'entry_condition_rules': []
                }, {
                    'description': '\u51fa\u53d1\u57ce\u5e02\u8f6c\u6362\u5931\u8d25',
                    'warnings': [{'warning_msg': '\u51fa\u53e3\u8282\u70b9', 'type': 'has_exit_connection'}],
                    'content': {
                        'questions': [{
                            'msg': '',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'val': true, 'key': 'parsing_failed'}],
                                    'function_name': 'key_val_match'
                                }]
                            }]]
                        }, {
                            'msg': '$msg_confirm\u51fa\u53d1\u57ce\u5e02\u4e0d\u652f\u6301\u3002',
                            'condition_rules': []
                        }]
                    },
                    'node_type': 'dialogue',
                    'edges': [{
                        'to_node_id': null,
                        'condition_rules': [],
                        'actions': [{'operation': 'update_confirm_status'}, {
                            'operation': 'set_to_global_info',
                            'val': 2,
                            'key': 'sys_node_dialogue_cnt_limit'
                        }]
                    }, {'to_node_id': null, 'condition_rules': []}, {
                        'to_node_id': null,
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'compare': '<', 'val': '2', 'key': 'sys_node_dialogue_cnt'}],
                                'function_name': 'key_val_match'
                            }]
                        }]]
                    }, {
                        'to_node_id': '0',
                        'condition_rules': [],
                        'actions': [{'operation': 'set_to_global_info', 'val': false, 'key': 'parsing_failed'}]
                    }],
                    'node_id': '2977183271008',
                    'entry_condition_rules': []
                }, {
                    'description': '\u5230\u8fbe\u57ce\u5e02\u8f6c\u6362\u5931\u8d25',
                    'warnings': [{'warning_msg': '\u51fa\u53e3\u8282\u70b9', 'type': 'has_exit_connection'}],
                    'node_type': 'dialogue',
                    'content': {
                        'questions': [{
                            'msg': '',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'key': 'parsing_failed', 'val': true}],
                                    'function_name': 'key_val_match'
                                }]
                            }]],
                            'question_type': 'failure_response'
                        }, {
                            'msg': '$msg_confirm\u5230\u8fbe\u57ce\u5e02\u4e0d\u652f\u6301\u3002',
                            'condition_rules': [],
                            'question_type': 'initial_response'
                        }]
                    },
                    'global_vars': [],
                    'node_dialogue_cnt_limit': 2,
                    'edges': [{
                        'to_node_id': null,
                        'edge_type': 'hidden',
                        'condition_rules': [],
                        'actions': [{'operation': 'update_confirm_status'}, {
                            'operation': 'set_to_global_info',
                            'key': 'sys_node_dialogue_cnt_limit',
                            'val': 2
                        }]
                    }, {'to_node_id': null, 'edge_type': 'hidden', 'condition_rules': []}, {
                        'to_node_id': null,
                        'edge_type': 'hidden',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'compare': '<', 'key': 'sys_node_dialogue_cnt', 'val': 2}],
                                'function_name': 'key_val_match'
                            }]
                        }]]
                    }, {
                        'to_node_id': null,
                        'edge_type': 'hidden',
                        'condition_rules': [],
                        'actions': [{'operation': 'set_to_global_info', 'key': 'sys_node_dialogue_cnt_limit', 'val': 2}]
                    }, {
                        'to_node_id': '0',
                        'edge_type': 'exceedThenGoTo',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': 'node_counter', 'function_name': 'counter_check'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': false,
                            'key': 'parsing_failed'
                        }, {'operation': 'set_to_global_info', 'key': 'sys_node_dialogue_cnt', 'val': 0}]
                    }, {
                        'to_node_id': '0',
                        'edge_type': 'else_into',
                        'condition_rules': [],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'key': 'parsing_failed',
                            'val': false
                        }, {'operation': 'set_to_global_info', 'key': 'sys_node_dialogue_cnt', 'val': 0}]
                    }],
                    'node_id': '7281131367989',
                    'entry_condition_rules': []
                }, {
                    'content': {
                        'questions': [{
                            'msg': null,
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{'content': [{'key': 'fromPlace'}], 'function_name': 'contain_key'}]
                            }], [{
                                'source': 'global_info',
                                'functions': [{'content': [{'key': 'toPlace'}], 'function_name': 'contain_key'}]
                            }]],
                            'question_type': 'skip_response'
                        }, {
                            'msg': '$msg_confirm\u597d\u7684\u3002\u8bf7\u95ee\u4f60\u4ece\u54ea\u91cc\u51fa\u53d1\u5230\u54ea\u91cc\u53bb\uff1f\u4f60\u53ef\u4ee5\u8bf4\u201c\u4ece\u5317\u4eac\u5e02\u5230\u4e0a\u6d77\u5e02\u201d\u3002',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'key': 'parsing_failed', 'val': true}],
                                    'function_name': 'key_val_match'
                                }]
                            }]],
                            'question_type': 'failure_response'
                        }, {
                            'msg': '$msg_confirm\u597d\u7684\u3002\u8bf7\u95ee\u4f60\u4ece\u54ea\u91cc\u51fa\u53d1\u5230\u54ea\u91cc\u53bb\uff1f',
                            'condition_rules': [],
                            'question_type': 'initial_response'
                        }]
                    },
                    'description': '\u51fa\u53d1\u57ce\u5e02\u5230\u8fbe\u57ce\u5e02',
                    'warnings': [{'warning_msg': '\u51fa\u53e3\u8282\u70b9', 'type': 'has_exit_connection'}],
                    'node_type': 'dialogue',
                    'default_parser_with_suffix': false,
                    'global_vars': ['fromPlace_570148214576', 'toPlace_570148214576', 'departDate_570148214576', 'arriveDate_570148214576', 'returnDate_570148214576'],
                    'node_dialogue_cnt_limit': 2,
                    'edges': [{
                        'to_node_id': null,
                        'edge_type': 'hidden',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'key': 'fromPlace'}, {'key': 'toPlace'}],
                                'function_name': 'not_contain_key'
                            }]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'key': 'parsing_failed',
                            'val': true
                        }, {'operation': 'update_confirm_status'}, {
                            'operation': 'set_to_global_info',
                            'key': 'sys_node_dialogue_cnt_limit',
                            'val': 2
                        }]
                    }, {
                        'to_node_id': null,
                        'edge_type': 'hidden',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'key': 'fromPlace'}, {'key': 'toPlace'}],
                                'function_name': 'not_contain_key'
                            }]
                        }, {
                            'source': 'text',
                            'functions': [{
                                'content': {
                                    'key_suffix': '_570148214576',
                                    'tags': 'multiselect-all,from_place,to_place,depart_date,arrive_date,return_date'
                                }, 'function_name': 'task_parser'
                            }]
                        }]],
                        'actions': [{'operation': 'set_to_global_info', 'key': 'parsing_failed', 'val': false}]
                    }, {
                        'to_node_id': '570148214576',
                        'edge_type': 'hidden',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'compare': '<', 'key': 'sys_node_dialogue_cnt', 'val': 2}],
                                'function_name': 'key_val_match'
                            }, {
                                'content': 'scenario_counter_rev',
                                'function_name': 'counter_check'
                            }, {
                                'content': [{'key': 'fromPlace'}, {'key': 'toPlace'}],
                                'function_name': 'not_contain_key'
                            }]
                        }]]
                    }, {
                        'to_node_id': '115011205620527',
                        'edge_type': 'normal',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'fromPlace'}], 'function_name': 'contain_key'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'key': 'parsing_failed',
                            'val': false
                        }, {'operation': 'set_to_global_info', 'key': 'sys_node_dialogue_cnt', 'val': 0}]
                    }, {
                        'to_node_id': '115011205620527',
                        'edge_type': 'normal',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': [{'key': 'toPlace'}], 'function_name': 'contain_key'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'key': 'parsing_failed',
                            'val': false
                        }, {'operation': 'set_to_global_info', 'key': 'sys_node_dialogue_cnt', 'val': 0}]
                    }, {
                        'to_node_id': '0109075415165',
                        'edge_type': 'normal',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': 'node_counter',
                                'function_name': 'counter_check',
                                'content_text_array': ['\u82e5\u8d85\u8fc7\u8282\u70b9\u5bf9\u8bdd\u8f6e\u6570\u9650\u5236']
                            }]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'key': 'parsing_failed',
                            'val': false
                        }, {'operation': 'set_to_global_info', 'key': 'sys_node_dialogue_cnt', 'val': 0}]
                    }, {
                        'to_node_id': null,
                        'edge_type': 'hidden',
                        'condition_rules': [],
                        'actions': [{'operation': 'set_to_global_info', 'key': 'sys_node_dialogue_cnt_limit', 'val': 2}]
                    }, {
                        'to_node_id': '0',
                        'edge_type': 'exceedThenGoTo',
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{'content': 'node_counter', 'function_name': 'counter_check'}]
                        }]],
                        'actions': [{
                            'operation': 'set_to_global_info',
                            'val': false,
                            'key': 'parsing_failed'
                        }, {'operation': 'set_to_global_info', 'key': 'sys_node_dialogue_cnt', 'val': 0}]
                    }, {
                        'to_node_id': '570148214576',
                        'edge_type': 'else_into',
                        'condition_rules': [],
                        'actions': [{'operation': 'set_to_global_info', 'key': 'parsing_failed', 'val': true}]
                    }],
                    'node_id': '570148214576',
                    'entry_condition_rules': []
                }, {
                    'description': '\u53d6\u6d88',
                    'warnings': [{'warning_msg': '\u51fa\u53e3\u8282\u70b9', 'type': 'has_exit_connection'}],
                    'content': {
                        'questions': [{
                            'msg': '',
                            'condition_rules': [[{
                                'source': 'global_info',
                                'functions': [{
                                    'content': [{'compare': '==', 'key': 'parsing_failed', 'val': true}],
                                    'function_name': 'key_val_match'
                                }]
                            }]]
                        }, {'msg': '\u9884\u8ba2\u64cd\u4f5c\u5df2\u53d6\u6d88\u3002', 'condition_rules': []}]
                    },
                    'node_type': 'dialogue',
                    'edges': [{
                        'to_node_id': null,
                        'condition_rules': [],
                        'actions': [{'operation': 'update_confirm_status'}, {
                            'operation': 'set_to_global_info',
                            'key': 'sys_node_dialogue_cnt_limit',
                            'val': 2
                        }]
                    }, {'to_node_id': null, 'condition_rules': []}, {
                        'to_node_id': null,
                        'condition_rules': [[{
                            'source': 'global_info',
                            'functions': [{
                                'content': [{'compare': '<', 'key': 'sys_node_dialogue_cnt', 'val': '2'}],
                                'function_name': 'key_val_match'
                            }]
                        }]]
                    }, {
                        'to_node_id': '0',
                        'condition_rules': [],
                        'actions': [{'operation': 'set_to_global_info', 'key': 'parsing_failed', 'val': false}]
                    }],
                    'node_id': '2896238102350',
                    'entry_condition_rules': []
                }],
                'setting': {'sys_node_dialogue_cnt_limit': 2, 'sys_scenario_dialogue_cnt_limit': 5},
                'msg_confirm': [{
                    'msg': '\u51fa\u53d1\u5730\u4e3a$global{fromPlace}\u3002',
                    'type': 'string',
                    'key': 'fromPlace'
                }, {
                    'msg': '\u5230\u8fbe\u5730\u4e3a$global{toPlace}\u3002',
                    'type': 'string',
                    'key': 'toPlace'
                }, {
                    'msg': '\u51fa\u53d1\u65e5\u671f\u4e3a$global{departDate}\u3002',
                    'type': 'date',
                    'key': 'departDate'
                }, {'msg': '\u822a\u7a7a\u516c\u53f8\u4e3a$global{airline}\u3002', 'type': 'string', 'key': 'airline'}],
                'metadata': {
                    'scenario_name': '\u8ba2\u7968',
                    'update_time': '2018-04-25 16:05:37',
                    'update_user': '0F4A01A5E335520F6C183AEFA6C5DBE25',
                    'scenario_id': '14f2ec36-a955-4291-b0c8-9e725935d437'
                }
            }
        }
    },
    "exception": null,
    "trace": null
}

