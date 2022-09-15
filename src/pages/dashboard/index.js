import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Pie, PieChart, Tooltip, Cell } from "recharts";
import { getDashboards } from "../../redux/action/dashboard";
import { getProducts } from "../../redux/action/product";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getDashboards());
  }, [dispatch]);

  const { products } = useSelector((state) => state.products);
  const { dashboards } = useSelector((state) => state.dashboards);

  const navigate = useNavigate();

  if (products.length === 0) {
    navigate("/form-warehouse");
  }

  const COLORS = [];

  if (dashboards?.products?.length > 0) {
    for (let i = 0; i < dashboards?.products?.length; i++) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      COLORS.push(`#${randomColor}`);
    }
  }

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Dashboard</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div class="row">
            <div class="col">
              <div class="small-box bg-success">
                <div class="inner">
                  <h3>{dashboards.qty_inbound}</h3>
                  <p>Inbound (Today)</p>
                </div>
                <div class="icon">
                  <i class="ion ion-stats-bars"></i>
                </div>
                <a href="#" class="small-box-footer">
                  More info <i class="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>

            <div class="col">
              <div class="small-box bg-warning">
                <div class="inner">
                  <h3>{dashboards.qty_transfer}</h3>
                  <p>Transfer (Today)</p>
                </div>
                <div class="icon">
                  <i class="ion ion-person-add"></i>
                </div>
                <a href="#" class="small-box-footer">
                  More info <i class="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>

            <div class="col">
              <div class="small-box bg-danger">
                <div class="inner">
                  <h3>{dashboards.qty_outbound}</h3>
                  <p>Outbound (Today)</p>
                </div>
                <div class="icon">
                  <i class="ion ion-pie-graph"></i>
                </div>
                <a href="#" class="small-box-footer">
                  More info <i class="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>

            <div class="col">
              <div class="small-box bg-secondary">
                <div class="inner">
                  <h3>{dashboards.qty_stock}</h3>
                  <p>Stock (Today)</p>
                </div>
                <div class="icon">
                  <i class="ion ion-pie-graph"></i>
                </div>
                <a href="#" class="small-box-footer">
                  More info <i class="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div class="card-header">
              <span className="badge badge-success">In Stock</span>
              <div class="card-tools">
                <button
                  type="button"
                  class="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i class="fas fa-minus"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-tool"
                  data-card-widget="remove"
                  title="Remove"
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-4">
                  <PieChart width={255} height={255}>
                    <Pie
                      data={dashboards?.products}
                      dataKey="qty_item_in_stock"
                      isAnimationActive={false}
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                      label
                    >
                      {dashboards?.products?.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </div>
                <div className="col-lg-8">
                  <div className="row">
                    {dashboards?.in_stock?.map((value, index) => (
                      <div className="col-lg-6" key={index}>
                        <div className="info-box">
                          <span className="info-box-icon bg-success">
                            <i class="fas fa-inbox"></i>
                          </span>
                          <div className="info-box-content">
                            <span className="info-box-text">
                              {value.warehouse}
                            </span>
                            <span className="info-box-number">{value.qty}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div class="card-header">
              <span className="badge badge-warning">On Transfer</span>
              <div class="card-tools">
                <button
                  type="button"
                  class="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i class="fas fa-minus"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-tool"
                  data-card-widget="remove"
                  title="Remove"
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-4">
                  <PieChart width={255} height={255}>
                    <Pie
                      data={dashboards?.products}
                      dataKey="qty_item_on_transfer"
                      isAnimationActive={false}
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                      label
                    >
                      {dashboards?.products?.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </div>
                <div className="col-lg-8">
                  <div className="row">
                    {dashboards?.on_transfer?.map((value, index) => (
                      <div className="col-lg-6" key={index}>
                        <div className="info-box">
                          <span className="info-box-icon bg-warning">
                            <i class="fas fa-exchange-alt"></i>
                          </span>
                          <div className="info-box-content">
                            <span className="info-box-text">
                              {value.warehouse}
                            </span>
                            <span className="info-box-number">{value.qty}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
