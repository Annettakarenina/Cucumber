package pages;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DataBasePage {

	Connection connection;
	Statement statement;
	ResultSet resultSet;
	String columnValue;

	public String getDataFromDatabase(String columnName) {

		try {
			// setting properties for MySQL:
			Class.forName("com.mysql.jdbc.Driver");
			String sqlUrl = "jdbc:mysql://localhost:3306/february2022";
			String sqlUsername = "root";
			String sqlPassword = "root";
			String sqlQuery = "select * from users";

			// create connection to local DB:
			connection = DriverManager.getConnection(sqlUrl, sqlUsername, sqlPassword);

			// giving the connection rv to execute queries:
			statement = connection.createStatement();

			// execute queries:
			resultSet = statement.executeQuery(sqlQuery);
			while (resultSet.next()) {
				columnValue = resultSet.getString(columnName);
				return columnValue;
			}

		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if (resultSet != null) {
				try {
					resultSet.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			if (connection != null) {
				try {
					connection.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}

		return columnValue;

	}
}
