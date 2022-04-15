let baseURL = 'https://8qbh7ylg.lc-cn-n1-shared.com'

export const $http = function(url, method = 'GET', data = {}) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseURL + url,
			method,
			header: {
				"X-LC-Id": "8qBH7yLGRweWguktSlhWftXU-gzGzoHsz",
				"X-LC-Key": "fYeDJmVSP9bQbM5387z8lFWF",
				"Content-Type": "application/json"
			},
			data,
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}

export const $get = function(url, data = {}) {
	return $http(url, 'GET', data)
}

export const $post = function(url, data = {}) {
	return $http(url, 'POST', data)
}
