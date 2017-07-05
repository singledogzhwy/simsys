 $(function () {
      $("#submitBtn").click(function () {
                if ($.trim($("#txtSim").val()) == "") {
                    $("#notextSearch").show();
                    $("#failedSearch").hide();
                    $("#successSearch").hide();
                    return;
                }
                var params = { sim: $("#txtSim").val() };
                $.getJSON("../api/IndexQuerySimInfo/Intranet", params)
               .done(function (data) {
                   if (data === null || data === "" || data === undefined) {
                       $("#failedSearch").show();
                       $("#notextSearch").hide();
                       $("#successSearch").hide();
                       return;
                   }
                   if (data.error !== 0) {
                       $("#failedSearch").show();
                       $("#notextSearch").hide();
                       $("#successSearch").hide();
                       return;
                   }
                   // $("#hid_simId").val(data.result.simId)
                   // $("#sim").html(data.result.sim);
                   // $("#iccid").html(data.result.guid);
                   // $("#package").html(data.result.package);
                   // $("#amount").html(data.result.amount);
                   // $("#period").html(data.result.packagePeriodSrc);
                   // $("#createTime").html(data.result.createTime);
                   // $("#balance").html(data.result.balance);
                   // $("#status").html(data.result.status);
                   // $("#failedSearch").hide();
                   // $("#successSearch").show();
                   // $("#notextSearch").hide();
                   // $("#singleCardTable").show(); 
                   // $("#tb_historyAccount").hide();
                   // $("#show_historyAccount").show();
                   // $("#hide_historyAccount").hide();
                   // QueryFlow();
                   // QueryState();

              if (data.result.apiCode == 3) {
                         QueryBalance();
                      }
                  }).fail(function (d) {
              });
           });
    })