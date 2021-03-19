using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApiAng.Models;

namespace WebApiAng.Controllers
{
    [EnableCors("*", "*", "*")]
    public class ValuesController : ApiController
    {
        // GET api/values
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        public IEnumerable<Employee> Get()
        {
            List<Employee> emplist = new List<Employee>();
            string qry = ConfigurationManager.ConnectionStrings["test1"].ToString();
            SqlConnection con = new SqlConnection(qry);
            string qry1 = "spGetAllEmployees";
            SqlCommand cmd = new SqlCommand(qry1, con);
            cmd.CommandType = CommandType.StoredProcedure;
            con.Open();
            SqlDataReader dr = cmd.ExecuteReader();
            while (dr.Read())
            {
                Employee employee = new Employee();
                employee.ID = Convert.ToInt32(dr["EmployeeID"]);
                employee.Name = dr["Name"].ToString();
                employee.Gender = dr["Gender"].ToString();
                employee.Department = dr["Department"].ToString();
                employee.City = dr["City"].ToString();
                emplist.Add(employee);
            }
            dr.Close();
            con.Close();
            return emplist;

        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
