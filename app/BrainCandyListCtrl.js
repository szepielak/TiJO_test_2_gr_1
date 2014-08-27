(function ()
{
      'use strict';
      function BrainCandyListCtrl(CandyDAO)
      {
            var ctrl = this;
            var sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';
            
            if (CandyDAO != undefined) {
                  CandyDAO.query ().then (function (data)
                  {
                        ctrl.list = data;
                        ctrl.sentence = sentence;
                  });
            }
           
      }

      var module = angular.module ('exerciseApp')
      module.controller ('BrainCandyListCtrl', ['CandyDAO', BrainCandyListCtrl]);
}) ();
