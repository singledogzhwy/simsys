using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Configuration;

namespace HZ.Web
{
    public partial class login : System.Web.UI.Page
    {
        protected System.Data.SqlClient.SqlConnection Cn;
        protected System.Data.SqlClient.SqlCommand Cm;
        protected System.Data.SqlClient.SqlCommand Dm;
        protected System.Data.SqlClient.SqlDataAdapter Da;
        protected System.Data.DataSet Ds;
        protected System.Data.SqlClient.SqlDataReader Dr;
        protected System.Data.SqlClient.SqlDataReader Cr;
        protected void Page_Load(object sender, EventArgs e)
        {

            if (!IsPostBack)
            {
                logins();
            }
           
        }

        protected void btn_Click(object sender, EventArgs e)
        {
    
            logins();
           
        }

        public void logins()
        {
            string txtUserName = Request.Form["txtUserName"];
            string txtUserPwd = Request.Form["txtUserPwd"];

           
                string str = "server=.;database=HuaZheng;uid=sa;pwd=123;Trusted_Connection=no";
                Cn = new SqlConnection(str);
                Cn.Open();

                Dm = new SqlCommand("SELECT * FROM user_table WHERE userName='" + txtUserName + "'", Cn);
                Cr = Dm.ExecuteReader();

                if (Cr.Read())//用户是否正确
                {
                    Session["userName"] = txtUserName;
                    this.txtUserName.Value = txtUserName;
                    Cr.Close();

                    Cm = new SqlCommand("SELECT * FROM user_table WHERE  password ='" + txtUserPwd + "'", Cn);
                    Dr = Cm.ExecuteReader();
                    if (Dr.Read())//密码是否正确
                    {

                        Session["password"] = txtUserPwd;
                        this.txtUserPwd.Value = txtUserPwd;
          
                        Response.Write("<script>alert('登陆成功')</script>");
                        Dr.Close();

                    }
                    else
                    {

                        Response.Write("<script>alert('密码错误！')</script>");
                    }
                    Cn.Close();
                }
                else
                {
                    if (txtUserName == null)
                    {
                        txtUserName = "";
                    }
                    else
                    {
                        Response.Write("<script>alert('用户名输入错误！')</script>");

                    }
                  
                }
          
        }
    }
}