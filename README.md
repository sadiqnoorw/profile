# profile
#kill or Stop laravel server with command line interface
sudo kill $(sudo lsof -t -i:port_number)
Like if it is running on 8000, you can do below
sudo kill $(sudo lsof -t -i:8000)
