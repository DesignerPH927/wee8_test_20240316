<template>
  <div class="product">
    <div class="productHeader"></div>
    <div class="container">
      <div class="py-7">
        <nav
          style="--bs-breadcrumb-divider: '>';"
          aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <RouterLink to="/">首頁</RouterLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              攝影師
            </li>
          </ol>
        </nav>
      <div class="row justify-content-md-center
          gx-3 gy-6 g-md-6">
          <div class="col-md-3 px-4">
            <div class="list-group text-center
            productList">
              <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                全部
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                攝影師
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                新娘秘書
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                婚宴場地
              </a>
            </div>
          </div>
          <div class="col-md-9">
            <RouterView></RouterView>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
