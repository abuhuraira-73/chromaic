import React from "react";

const FindSizeModal = () => {
  return (
    <div className="modal fade modalDemo tf-product-modal" id="find_size">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="header">
            <div className="demo-title">Size chart</div>
            <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
          </div>
          <div className="tf-rte">
            <div className="tf-table-res-df">
              <h6>Size guide</h6>
              <table className="tf-sizeguide-table">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>US</th>
                    <th>Bust</th>
                    <th>Waist</th>
                    <th>Low Hip</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>XS</td>
                    <td>2</td>
                    <td>32</td>
                    <td>24 - 25</td>
                    <td>33 - 34</td>
                  </tr>
                  <tr>
                    <td>S</td>
                    <td>4</td>
                    <td>34 - 35</td>
                    <td>26 - 27</td>
                    <td>35 - 26</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>6</td>
                    <td>36 - 37</td>
                    <td>28 - 29</td>
                    <td>38 - 40</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>8</td>
                    <td>38 - 29</td>
                    <td>30 - 31</td>
                    <td>42 - 44</td>
                  </tr>
                  <tr>
                    <td>XL</td>
                    <td>10</td>
                    <td>40 - 41</td>
                    <td>32 - 33</td>
                    <td>45 - 47</td>
                  </tr>
                  <tr>
                    <td>XXL</td>
                    <td>12</td>
                    <td>42 - 43</td>
                    <td>34 - 35</td>
                    <td>48 - 50</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="tf-page-size-chart-content">
              <div>
                <h6>Measuring Tips</h6>
                <div className="title">Bust</div>
                <p>Measure around the fullest part of your bust.</p>
                <div className="title">Waist</div>
                <p>Measure around the narrowest part of your torso.</p>
                <div className="title">Low Hip</div>
                <p className="mb-0">
                  With your feet together measure around the fullest part of your
                  hips/rear.
                </p>
              </div>
              <div>
                <img
                  className="sizechart lazyload"
                  data-src="assets/images/shop/products/size_chart2.jpg"
                  src="assets/images/shop/products/size_chart2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindSizeModal;
