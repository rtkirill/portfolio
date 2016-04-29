angular
    .module("ItemsList", [])
    .controller("MainCtrl", function ($scope) {
        $scope.titleFirst = "Выбрать марку";
        $scope.titleSecond = "Выбрать цвет";

        $scope.items = [
            {
                idblock: "item1",
                status: "active",
                viewBtn: "visibility: visible",
                characters: [
                    {
                        image: "images/r1.jpg",
                        title: "Ремень с гравировкой",
                        price: "2 799"
                    },
                    {
                        image: "images/g1.jpg",
                        title: "Галстук классический",
                        price: "899"
                    },
                    {
                        image: "images/s1.jpg",
                        title: "Сумка-боулинг строгая",
                        price: "5 499"
                    },
                    {
                        image: "images/k1.jpg",
                        title: "Бумажник с молнией",
                        price: "2 099"
                    },
                    {
                        image: "images/h2.jpg",
                        title: "Фуляр однотонный",
                        price: "1 299"
                    },
                    {
                        image: "images/k2.jpg",
                        title: "Кошелек эластичный",
                        price: "1 399"
                    },
                    {
                        image: "images/s2.jpg",
                        title: "Элегантная Сумка-боулинг",
                        view: "display: none",
                        price: "4 999"
                    },
                    {
                        image: "images/h2.jpg",
                        title: "Фуляр однотонный",
                        view: "display: none",
                        price: "1 299"
                    },
                    {
                        image: "images/h3.jpg",
                        title: "Шарф деним",
                        view: "display: none",
                        price: "2 099"
                    },
                    {
                        image: "images/h4.jpg",
                        title: "Шарф из вискозы",
                        view: "display: none",
                        price: "1 299"
                    },
                    {
                        image: "images/h5.jpg",
                        title: "Шарф с бахромой",
                        view: "display: none",
                        price: "1 899"
                    },
                    {
                        image: "images/k3.jpg",
                        title: "Кошелек с фактурной отделкой",
                        view: "display: none",
                        price: "1 499"
                    },
                    {
                        image: "images/r2.jpg",
                        title: "Пояс кожаный узкий",
                        view: "display: none",
                        price: "2 499"
                    },
                    {
                        image: "images/r3.jpg",
                        title: "Ремень",
                        view: "display: none",
                        price: "2 099"
                    },
                    {
                        image: "images/r4.jpg",
                        title: "Ремень широкий темный",
                        view: "display: none",
                        price: "2 599"
                    },
                    {
                        image: "images/r5.jpg",
                        title: "Ремень замшевый",
                        view: "display: none",
                        price: "2 999"
                    },
                    {
                        image: "images/r6.jpg",
                        title: "Ремень с гравировкой",
                        view: "display: none",
                        price: "2 799"
                    },
                    {
                        image: "images/g2.jpg",
                        title: "Галстук узкий с узором",
                        view: "display: none",
                        price: "1 099"
                    },
                    {
                        image: "images/g3.jpg",
                        title: "Галстук текстурированный",
                        view: "display: none",
                        price: "1 199"
                    },
                    {
                        image: "images/g4.jpg",
                        title: "Галстук узкий",
                        view: "display: none",
                        price: "999"
                    }
                ]
            },
            {
                idblock: "item2",
                viewBtn: "display: none",
                characters: [
                    {
                        image: "images/r1.jpg",
                        title: "Ремень с гравировкой",
                        price: "2 799"
                    },
                    {
                        image: "images/r2.jpg",
                        title: "Пояс кожаный узкий",
                        price: "2 499"
                    },
                    {
                        image: "images/r3.jpg",
                        title: "Ремень",
                        price: "2 099"
                    },
                    {
                        image: "images/r4.jpg",
                        title: "Ремень широкий темный",
                        price: "2 599"
                    },
                    {
                        image: "images/r5.jpg",
                        title: "Ремень замшевый",
                        price: "2 999"
                    },
                    {
                        image: "images/r6.jpg",
                        title: "Ремень с гравировкой",
                        price: "2 799"
                    }
                ]
            },
            {
                idblock: "item3",
                viewBtn: "display: none",
                characters: [
                    {
                        image: "images/g1.jpg",
                        title: "Галстук классический",
                        price: "899"
                    },
                    {
                        image: "images/g2.jpg",
                        title: "Галстук узкий с узором",
                        price: "1 099"
                    },
                    {
                        image: "images/g3.jpg",
                        title: "Галстук текстурированный",
                        price: "1 199"
                    },
                    {
                        image: "images/g4.jpg",
                        title: "Галстук узкий",
                        price: "999"
                    }
                ]
            },
            {
                idblock: "item4",
                viewBtn: "display: none",
                characters: [
                    {
                        image: "images/h1.jpg",
                        title: "Шарф базовый",
                        price: "1 099"
                    },
                    {
                        image: "images/h2.jpg",
                        title: "Фуляр однотонный",
                        price: "1 299"
                    },
                    {
                        image: "images/h3.jpg",
                        title: "Шарф деним",
                        price: "2 099"
                    },
                    {
                        image: "images/h4.jpg",
                        title: "Шарф из вискозы",
                        price: "1 299"
                    },
                    {
                        image: "images/h5.jpg",
                        title: "Шарф с бахромой",
                        price: "1 899"
                    }
                ]
            },
            {
                idblock: "item5",
                viewBtn: "display: none",
                characters: [
                    {
                        image: "images/s1.jpg",
                        title: "Сумка-боулинг строгая",
                        price: "5 499"
                    },
                    {
                        image: "images/s2.jpg",
                        title: "Элегантная Сумка-боулинг",
                        price: "4 999"
                    }
                ]
            },
            {
                idblock: "item6",
                viewBtn: "display: none",
                characters: [
                    {
                        image: "images/k1.jpg",
                        title: "Бумажник с молнией",
                        price: "2 099"
                    },
                    {
                        image: "images/k2.jpg",
                        title: "Кошелек эластичный",
                        price: "1 399"
                    },
                    {
                        image: "images/k3.jpg",
                        title: "Кошелек с фактурной отделкой",
                        price: "1 499"
                    }
                ]
            }
        ];
        
    
        $scope.count = 0;
        $scope.cartAdd = function (e) {
            $scope.count++;
            $scope.itemName = e;
        };

    });