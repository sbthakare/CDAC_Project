const Transactions = () => (
  <div
    style={{
      justifyContent: "center",
      alignItems: "center",
      height: "112vh",
      backgroundColor: "#f0f0f5",
    }}
  >
    <div className="section">
      <center>
        <h2>Transaction History</h2>
      </center>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Payment Method</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="#">#123</a>
              </td>
              <td>Social Media Expert</td>
              <td class="amount">₹99.00</td>
              <td>Dec 15, 2018</td>
              <td>
                <span class="icon paypal"></span> Paytem
              </td>
              <td class="status-pending">
                <span class="icon pending"></span> Pending
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">#456</a>
              </td>
              <td>Web Designer</td>
              <td class="amount">₹199.00</td>
              <td>Nov 10, 2018</td>
              <td>
                <span class="icon bank-transfer"></span> Bank Transfer
              </td>
              <td class="status-pending">
                <span class="icon pending"></span> Pending
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">#789</a>
              </td>
              <td>Finance Accountant</td>
              <td class="amount">₹299.00</td>
              <td>Oct 5, 2018</td>
              <td>
                <span class="icon paypal"></span> Google Pay
              </td>
              <td class="status-pending">
                <span class="icon pending"></span> Pending
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">#101</a>
              </td>
              <td>Social Media Expert</td>
              <td class="amount">₹399.00</td>
              <td>Dec 15, 2018</td>
              <td>
                <span class="icon bank-transfer"></span> Bank Transfer
              </td>
              <td class="status-successful">
                <span class="icon successful"></span> Successful
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">#112</a>
              </td>
              <td>Web Designer</td>
              <td class="amount">₹499.00</td>
              <td>Nov 10, 2018</td>
              <td>
                <span class="icon paypal"></span> Paytem
              </td>
              <td class="status-pending">
                <span class="icon pending"></span> Pending
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">#987</a>
              </td>
              <td>Finance Accountant</td>
              <td class="amount">₹599.00</td>
              <td>Oct 5, 2018</td>
              <td>
                <span class="icon bank-transfer"></span> Bank Transfer
              </td>
              <td class="status-successful">
                <span class="icon successful"></span> Successful
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">#654</a>
              </td>
              <td>Social Media Expert</td>
              <td class="amount">₹699.00</td>
              <td>Dec 15, 2018</td>
              <td>
                <span class="icon paypal"></span> Paytem
              </td>
              <td class="status-successful">
                <span class="icon successful"></span> Successful
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Transactions;
