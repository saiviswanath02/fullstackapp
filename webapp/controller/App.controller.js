sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
            onInit: function () {
                var data = {
                    "EmployeeDetails":[
                        {
                            "empid":1001,
                            "firstname":"Akshay",
                            "lastname":"Rathod",
                            "emailid":"akshay123@gmail.com"
                        },{
                            "empid":1002,
                            "firstname":"Vinay",
                            "lastname":"Sharma",
                            "emailid":"vinay123@gmail.com"
                        },{
                            "empid":1003,
                            "firstname":"Abhinav",
                            "lastname":"Krishna",
                            "emailid":"abhinav123@gmail.com"
                        },{
                            "empid":1004,
                            "firstname":"Rakesh",
                            "lastname":"Sharma",
                            "emailid":"rakesh123@gmail.com"
                        },{
                            "empid":1005,
                            "firstname":"Vivek",
                            "lastname":"Bhopal",
                            "emailid":"vivek123@gmail.com"
                        },{
                            "empid":1006,
                            "firstname":"Arjun",
                            "lastname":"Mishra",
                            "emailid":"arjun123@gmail.com"
                        }
                    ]
                };

                var oModel = new sap.ui.model.json.JSONModel(data);
                this.getView().setModel(oModel);
            }
        });
    });
